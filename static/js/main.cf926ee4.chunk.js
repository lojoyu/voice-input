(this["webpackJsonpvoice-input"]=this["webpackJsonpvoice-input"]||[]).push([[0],{35:function(t,e,n){t.exports=n(74)},40:function(t,e,n){},70:function(t,e){},73:function(t,e,n){},74:function(t,e,n){"use strict";n.r(e);var a=n(0),r=n.n(a),i=n(27),o=n.n(i),c=(n(40),n(28)),s=n(29),l=n(33),u=n(30),f=n(34),d=n(31),h=n.n(d),p=n(11),w=n(32),v=n.n(w)()("https://stage-effect-server1.herokuapp.com/user");v.on("connect",(function(){!0,console.log("socket connect to server")}));var y=function(t,e){v.emit("osc",{address:t,args:[e]})};function m(t){var e,n,a=0,r=[],i=[],o=[0,0,0];function c(e,a){for(var i,o=32*Math.PI/n,c=0,s=0;s<n;s+=16){for(var l=0,u=0,f=s;f<s+16&&f<n;f++)l+=r[f],u++;var d=(l/=u)/128*a,h=(e+d)*Math.sin(c),p=(e+d)*Math.cos(c);t.curveVertex(h,p),0===s&&(i=[h,p]),c+=o}t.vertex(i[0],i[1]),t.endShape()}t.setup=function(){t.createCanvas(t.windowWidth,t.windowHeight),t.frameRate(30)},t.windowResized=function(){t.resizeCanvas(t.windowWidth,t.windowHeight)},t.myCustomRedrawAccordingToNewPropsHandler=function(t){if(t.bufferLength&&(n=t.bufferLength),t.analyser){if(null==t.analyser)return;e=t.analyser,r=new Uint8Array(e.fftSize),i=new Uint8Array(e.fftSize)}t.btnClick&&t.btnClick},t.draw=function(){if(a++,void 0!==e&&(e.getByteFrequencyData(i),e.getByteTimeDomainData(r)),t.background(o[0],o[1],o[2],50),!(r.length<=0)){var s=function(t){var e=Math.max.apply(Math,Object(p.a)(i)),a=44100*i.indexOf(e)/(2*n);return e>t?Math.floor(a):0}(50),l=Math.max.apply(Math,Object(p.a)(i))/256;l>50/255&&a%10===0&&y("/sound",{f:s,d:l}),function(e,n){t.push(),t.translate(t.windowWidth/2,t.windowHeight/2);var a=t.map(e,0,1,40,50),r=t.map(e,0,1,30,70),i=Math.floor(t.map(n,100,2e3,0,360,!0)),s=Math.floor(t.map(e,.2,1,0,50,!0));console.log(i,s),t.stroke("hsl(".concat(i,", ").concat(s,"%, 50%)")),t.fill(o[0],o[1],o[2]),t.beginShape(),c(r,a),t.endShape(t.CLOSE),t.fill("hsla(".concat(i,", ").concat(s,"%, 90%, 0.5)"));for(var l=0;l<30;l++)t.noStroke(),t.beginShape(),c(r-4-2*l,a),t.endShape(t.CLOSE),t.fill(o[0],o[1],o[2],10);t.pop()}(l,s),t.textSize(15),t.fill(200),t.textAlign(t.CENTER),t.text("MAKE SOUND",t.windowWidth/2,t.windowHeight-50)}}}n(73);var g=function(t){function e(){var t;Object(c.a)(this,e),(t=Object(l.a)(this,Object(u.a)(e).call(this))).btnClick=function(){navigator.mediaDevices.getUserMedia({audio:!0}).then(t.micStart,t.micError)},t.micStart=function(e){t.setState({style:{display:"none"}});var n=t.state.context,a=n.createMediaStreamSource(e),r=n.createAnalyser();a.connect(r),r.fftSize=2048;var i=r.frequencyBinCount,o=new Uint8Array(r.fftSize);t.setState({analyser:r,dataArray:o,bufferLength:i})},t.micError=function(){t.setState({btnTxt:"RE-EANBLE!"}),console.log("error")},t.update=function(){var e=t.state,n=e.dataArray,a=e.analyser;console.log(n),a.getByteFrequencyData(n)};var n=window.AudioContext||window.webkitAudioContext||!1;return t.state={timer:null,style:{},btnTxt:"START",context:n?new n:null},t}return Object(f.a)(e,t),Object(s.a)(e,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",{id:"wrap",style:this.state.style},r.a.createElement("button",{onClick:this.btnClick},this.state.btnTxt)),r.a.createElement(h.a,{sketch:m,analyser:this.state.analyser,bufferLength:this.state.bufferLength}))}}]),e}(a.Component);o.a.render(r.a.createElement(g,null),document.getElementById("root"))}},[[35,1,2]]]);
//# sourceMappingURL=main.cf926ee4.chunk.js.map