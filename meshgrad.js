var i=()=>Math.round(Math.random()*360),c=n=>Math.round(Math.random()*(n*100)%100),g=(n,t,e)=>Math.round(t/e*(n*100)%100),d=n=>{if(!!n){n=n.replace(/#/g,""),n.length===3&&(n=n.split("").map(function(b){return b+b}).join(""));var t=/^([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})[\da-z]{0,0}$/i.exec(n);if(!!t){var e=parseInt(t[1],16),r=parseInt(t[2],16),a=parseInt(t[3],16);e/=255,r/=255,a/=255;var o=Math.max(e,r,a),s=Math.min(e,r,a),u=(o+s)/2;if(o==s)u=0;else{var m=o-s;switch(o){case e:u=(r-a)/m+(r<a?6:0);break;case r:u=(a-e)/m+2;break;case a:u=(e-r)/m+4;break}u/=6}return u=Math.round(360*u),u}}},p=(n,t)=>Array.from({length:n},(e,r)=>r===0?`hsl(${t}, 100%, 80%)`:r<n/1.4?`hsl(${t-30*(1-2*(r%2))*(r>2?r/2:r)}, 100%, ${76-r*(1-2*(r%2))*1.75}%)`:`hsl(${t-150*(1-2*(r%2))}, 100%, ${76-r*(1-2*(r%2))*1.25}%)`),M=(n,t,e)=>Array.from({length:n},(r,a)=>`radial-gradient(at ${e?g(a,e,n):c(a)}% ${e?g(a*10,e,n):c(a*10)}%, ${t[a]} 0px, transparent 50%)
`),f=(n,t,e)=>{let r=p(n,t||i()),a=M(n,r,e||void 0);return[r[0],a.join(",")]},$=(n,t,e)=>{let[r,a]=f(n,d(t)?d(t):void 0,e||void 0);return`background-color: ${r}; background-image:${a}`},k=(n,t,e)=>{let[r,a]=f(n,d(t)?d(t):void 0,e||void 0);return{backgroundColor:r,backgroundImage:a}};window.generateJSXMeshGradient=k;window.generateMeshGradient=$;