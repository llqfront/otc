var Unit = {};
/**
 * 原生获取
 * var s = Unit.Q('#box')[0];
 * */
Unit.Q = function (arg){
    this.aElements = [];
    switch (typeof arg){
        case 'string':
            switch(arg.charAt(0)){
                case '#':
                    if(/\s/.test(arg)){
                        var aArg = arg.split(' ');
                        this.aElements = Unit.getEle(aArg[0],aArg[1]);
                    }else{
                        this.aElements.push(document.getElementById(arg.substring(1)));
                    }
                    break;
                default:
                    this.aElements = Unit.getEle(document,arg);
                    break
            }
            break;
        case 'function':
            Unit.addEvent(window,'load',arg);
            break;
    }
    return this.aElements;
}

Unit.getEle = function (f,s){
    var result = [];
    var elements = null;
    if(s.charAt(0) == '.'){
        if(typeof f === 'string'){
            var par = document.getElementById(f.substring(1));
            if(!par){
                return result;
            }else{
                elements = par.getElementsByTagName('*');
            }
        }else if(typeof f === 'object' && f!=null){
            elements = f.getElementsByTagName('*');
        }else{
            elements = [];
        }
        for(var i=0;i<elements.length;i++){
            if(/\s/.test(elements[i].className)){
                var names = elements[i].className.split(' ');
                if(Unit.strComper(s.substring(1),names) === true){
                    result.push(elements[i]);
                }
            }else{
                if(elements[i].className == s.substring(1)){
                    result.push(elements[i]);
                }
            }
        }
    }else{
        if(typeof f === 'string'){
            var par = document.getElementById(f.substring(1));
            if(!par){
                return result;
            }
            result = document.getElementById(f.substring(1)).getElementsByTagName(s);
        }else if(typeof f === 'object'){
            result = f.getElementsByTagName(s);
        }
    }
    return result;
};

Unit.strComper = function (a,b){
    for(var i=0;i<b.length;i++){
        if(a == b[i]){
            return true;
            break;
        }
    }
};

Unit.addEvent = function(obj,type,fn){
    if(!obj){return null;}
    if(obj.addEventListener){
        obj.addEventListener(type,function (ev){
            var rtn=fn.call(obj,ev);
            if(rtn==false){
                ev.cancelBubble=true;
                // ev.stopPropagation ? ev.stopPropagation() : (ev.cancelBubble=true);
                ev.preventDefault();
            }
        },false);
    }else{
        obj.attachEvent('on'+type,function (ev){
            var rtn=fn.call(obj,ev);
            if(rtn==false){
                ev.cancelBubble=true;
                return false;
            }
        })
    }
};
/**
 * 包含 与jq 相似
 * 分数组与元素
 * */
Unit.contains  = function(root, el) {
    // if (root.compareDocumentPosition)
    //  return root === el || !!(root.compareDocumentPosition(el) & 16);
    //  if (root.contains && el.nodeType === 1){
    //      return root.contains(el) && root !== el;
    // }
    // while ((el = el.parentNode))
    // if (el === root) return true;
    // return false;
    if(root.constructor==Array){
        if(root.indexOf(el)>-1){
            return true;
        }else {
            return false;
        }
    }else {
        if (root.compareDocumentPosition)
            return root === el || !!(root.compareDocumentPosition(el) & 16);
        if (root.contains && el.nodeType === 1){
            return root.contains(el) && root !== el;
        }
        while ((el = el.parentNode))
            if (el === root) return true;
        return false;
    }
};

Unit.css = function(obj,attr,value){
    if(!obj)return null;
    if(arguments.length===2){
        if(typeof attr == 'string'){
            if(attr == 'float'){
                if(-[1,]){
                    attr = 'cssFloat';
                }else {
                    attr = 'styleFloat';
                }
            }
            if(obj.currentStyle){
                return obj.currentStyle[attr];
            }else {
                return getComputedStyle(obj,false)[attr];
            }
        }else {
            for(var key in attr){
                obj.style[key] = attr[key];
                if(key=='float'){
                    if(-[1,]){
                        key = 'cssFloat';
                        obj.style[key] = attr['float'];
                    }else {
                        key = 'styleFloat';
                        obj.style[key] = attr['float'];
                    }
                }
            }
        }
    }else if(arguments.length===3){
        if(attr == 'float'){
            if(-[1,]){
                attr = 'cssFloat';
            }else {
                attr = 'styleFloat';
            }
        }
        obj.style[attr] = value;
    }
}

Unit.attr = function(obj, attr, value){
    if(!obj){return null;}
    if(attr.toLowerCase()=='class'){
        attr='className';
    }
    if(arguments.length==2){
        if(obj.attributes[attr]){
            return obj.attributes[attr].nodeValue;
        }else{
            return null;
        }
    }
    else if(arguments.length==3){
        obj.setAttribute(attr,value);
    }
};

Unit.getPos = function(obj,bCurrent){
    var pos = {x:0,y:0};
    if(!obj){
        return pos;
    }
    if(bCurrent){
        pos.x = parseInt(obj.getBoundingClientRect().left);
        pos.y = parseInt(obj.getBoundingClientRect().top);
    }else{
        pos.x = parseInt(obj.getBoundingClientRect().left + (document.documentElement.scrollLeft||document.body.scrollLeft),10);
        pos.y = parseInt(obj.getBoundingClientRect().top + (document.documentElement.scrollTop||document.body.scrollTop));
    }
    return pos;
}

Unit.getParents = function(obj,fName){
    if(!obj){return null;}
    var par = obj.parentNode;
    while(par){
        if(Unit.haveName(par,fName)){
            return par;
        }else{
            par = par.parentNode;
        }
    }
    return null;
}

Unit.addClass = function(obj,name){
    if(!obj || Unit.haveClass(obj,name)){
        return null;
    }
    if(obj.className!==''){
        obj.className += ' ';
        obj.className += name;
    }else{
        obj.className = name;
    }
}
Unit.removeClass = function(obj,name){
    if(!obj){return null;}
    var sClass = obj.className;
    var aClass = sClass.split(' ');
    for (var i=0,length=aClass.length;i<length;i++ ){
        if(name == aClass[i]){
            aClass[i] = aClass[length-1];
            aClass.pop(aClass[length-1]);
            break;
        }
    }
    obj.className = aClass.join(' ');
}
Unit.haveClass = function(obj,className){
    if(!obj){return false}
    var objClass = obj.className;
    if(!objClass){
        return false;
    }
    var allName = objClass.split(' ');
    var res = false;
    for(var i=0,len = allName.length;i<len;i++){
        if(allName[i] == className){
            res = true;
            break;
        }
    }
    return res;
}

Unit.haveName = function(obj,name){
    if(!obj || !obj.tagName){return false;}
    if(name.charAt(0) == '.' && Unit.haveClass(obj,name.substring(1))){
        return true;
    }else if(name == obj.tagName.toLowerCase()){
        return true;
    }
    return false;
}

Unit.first = function(oParent){
    if(!oParent)return null;
    return oParent.firstElementChild || oParent.firstChild;
};

Unit.last = function(oParent){
    if(!oParent)return null;
    return oParent.lastElementChild || oParent.lastChild;
};

Unit.prev = function(obj){
    if(!obj)return null;
    return obj.previousElementSibling || obj.previousSibling;
};

Unit.next = function(obj){
    if(!obj)return null;
    return obj.nextElementSibling || obj.nextSibling;
};

Unit.inArray = function(match,arr,fromIndex){
    var len = arr.length;
    var fromIndex = fromIndex || 0;
    fromIndex = fromIndex<0 ? len+fromIndex : fromIndex;
    for(; fromIndex<len; fromIndex++){
        if(arr[fromIndex] == match){
            return fromIndex;
        }
    }
    return -1;
}

Unit.loadScript = function(url,callback){
    var  script = document.createElement('script');
    if(script.readyState){
        script.onreadystatechange = function(){
            if(this.readyState == 'loaded' || this.readyState == 'complete'){
                script.onreadystatechange = null;
                if(callback){
                    callback();
                }
            }
        }
    }else{
        script.onload = function(){
            if(callback){
                callback();
            }
        }
    }
    script.src=url;
    document.getElementsByTagName('head')[0].appendChild(script);
}

Unit.getSib = function (obj,name){
    var obj = obj;
    var res = [];
    while(obj.previousSibling){
        obj = obj.previousSibling;
        if(obj.nodeType == 1){
            if(name){
                if(Unit.haveName(obj,name)){
                    res.push(obj);
                }
            }else{
                res.push(obj);
            }
        }
    }
    res.reverse();
    while(obj.nextSibling){
        obj = obj.nextSibling;
        if(obj.nodeType == 1){
            if(name){
                if(Unit.haveName(obj,name)){
                    res.push(obj);
                }
            }else{
                res.push(obj);
            }
        }
    }
    return res;
}

Unit.domfn = [];
Unit.isReady = false;
Unit.ready = function(fn){
    Unit.initReady();
    for(var i=0,length = arguments.length;i<length;i++){
        if(Unit.isReady){
            arguments[i]();
        }else{
            Unit.domfn.push(arguments[i]);
        }
    }
};
Unit.fireReady = function(){
    if(Unit.isReady){return;};
    Unit.isReady = true;
    for(var i=0,length = Unit.domfn.length;i<length;i++){
        var fn = Unit.domfn[i];
        fn();
    }
    Unit.domfn.length = 0;
};
Unit.initReady = function(){
    if(document.addEventListener){
        document.addEventListener('DOMContentLoaded',function(){
            document.removeEventListener('DOMContentLoaded',arguments.callee,false);
            Unit.fireReady();
        },false)
    }else{
        document.write('<script id="ie_ready" defer="defer" src="//:"></script>');
        var script = document.getElementById('ie_ready');
        script.onreadystatechange = function(){
            if(this.readyState == 'complete' || this.readyState == 'loaded'){
                setTimeout(function(){
                    Unit.fireReady();
                },0)
                this.onreadystatechange = null;
                if(this.parentNode){
                    this.parentNode.removeChild(this);
                }
            }
        }
    }
};

Unit.startMove = function(obj,oTarget,fn){
    if(!obj){return null;}
    clearInterval(obj.timer);obj.timer = null;
    obj.timer = setInterval(function(){
        var iCur = 0;
        var attr = '';
        var bStop = true;
        for(attr in oTarget){
            if(attr == 'opacity'){
                //iCur = Math.round(_Q.css(obj,'opacity')*100);
                iCur = parseInt(parseFloat(Unit.css(obj,'opacity')).toFixed(2)*100);
            }else {
                iCur = parseInt(Unit.css(obj,attr))
            }
            if(isNaN(iCur)){iCur=0;}
            var iSpeed = (oTarget[attr]-iCur)/9;
            iSpeed=iSpeed>0 ? Math.ceil(iSpeed) : Math.floor(iSpeed);
            iCur+=iSpeed;
            if(oTarget[attr]!=iCur){bStop=false;}
            if(attr == 'opacity'){
                obj.style.filter='alpha(opacity:'+iCur+')';
                obj.style.opacity=iCur/100;
            }else {
                obj.style[attr]=iCur+'px';
            }
        }
        if(bStop){
            clearInterval(obj.timer);
            obj.timer=null;
            if(fn){fn.call(obj);}
        }
    },30)
};

Unit.stopMove = function (obj){
    if(!obj){return null;}
    if(obj.timer){clearInterval(obj.timer);obj.timer = null;}
};


// 字符串转json
Unit.newJson = function(str){
    var json = (new Function("return " + str))();
    return json;
}
export default Unit;
