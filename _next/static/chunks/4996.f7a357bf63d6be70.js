!function(){var e,t,n,r,a,i,o={21491:function(e,t,n){"use strict";let r;n.d(t,{FL:function(){return d},IA:function(){return h},RH:function(){return f},Td:function(){return s},hl:function(){return u}});var a=n(96045),i=n(18762);let o=async()=>{l();let e=await (0,i.X3)("face",1,{upgrade(e,t,n){a.ZP.info("Upgrading face DB ".concat(t," => ").concat(n)),t<1&&(e.createObjectStore("face-index",{keyPath:"fileID"}),e.createObjectStore("file-status",{keyPath:"fileID"}).createIndex("status","status"))},blocking(){a.ZP.info("Another client is attempting to open a new version of face DB"),e.close(),r=void 0},blocked(){a.ZP.warn("Waiting for an existing client to close their connection so that we can update the face DB version")},terminated(){a.ZP.warn("Our connection to face DB was unexpectedly terminated"),r=void 0}});return e},l=()=>{(0,i.Lj)("mldata")},c=()=>null!=r?r:r=o(),s=async()=>{try{r&&(await r).close()}finally{r=void 0}},u=async e=>{let t=(await c()).transaction(["face-index","file-status"],"readwrite"),n=t.objectStore("face-index"),r=t.objectStore("file-status");return Promise.all([n.put(e),r.put({fileID:e.fileID,status:"indexed",failureCount:0}),t.done]).then(()=>{})},d=async e=>{let t=(await c()).transaction(["face-index","file-status"],"readwrite"),n=await t.objectStore("file-status").getAllKeys(),r=new Set(e),a=new Set(n),i=e.filter(e=>!a.has(e)),o=n.filter(e=>!r.has(e));return Promise.all([i.map(e=>t.objectStore("file-status").put({fileID:e,status:"indexable",failureCount:0})),o.map(e=>t.objectStore("file-status").delete(e)),o.map(e=>t.objectStore("face-index").delete(e)),t.done].flat()).then(()=>{})},f=async e=>(await c()).transaction("file-status","readonly").store.index("status").getAllKeys(IDBKeyRange.only("indexable"),e),h=async e=>{var t,n;let r=(await c()).transaction("file-status","readwrite"),a=(null!==(n=null===(t=await r.store.get(e))||void 0===t?void 0:t.failureCount)&&void 0!==n?n:0)+1;return await r.store.put({fileID:e,status:"failed",failureCount:a}),r.done}},44996:function(e,t,n){"use strict";var r=n(90758),a=n(47371),i=n(96045),o=n(18786),l=n(66134);n(92396);let c=e=>null===e?void 0:e;n(95525),n(94522);var s=n(30195);s.z.object({internalUser:s.z.boolean().nullish().transform(c),betaUser:s.z.boolean().nullish().transform(c)});var u=n(10986);let d=e=>{if(null===e)throw Error("Required value was null");if(void 0===e)throw Error("Required value was undefined");return e};var f=n(82797),h=n(21491);class y{constructor(){this.faceIndexer=()=>{var e;return null!==(e=this._faceIndexer)&&void 0!==e?e:this._faceIndexer=g().remote}}}new y;let g=()=>new u.d("face-indexer",new Worker(n.tu(new URL(n.p+n.u(3201),n.b)))),E=async(e,t)=>{let n=await (0,f.NJ)(),r=new Map(n.filter(t=>t.ownerID==e).map(e=>[e.id,e]));return await (0,h.FL)([...r.keys()]),(await (0,h.RH)(t)).map(e=>d(r.get(e)))};var w=n(87299);class p{async dispose(){this.localFilesMap=void 0,await this.syncQueue.onIdle(),this.syncQueue.removeAllListeners()}constructor(e,t,n){this.token=e,this.userID=t,this.userAgent=n,this.outOfSyncFiles=[],this.nSyncedFiles=0;let r=b();this.syncQueue=new l.Z({concurrency:r})}}let b=()=>Math.max(2,Math.ceil(navigator.hardwareConcurrency/2));class x{async sync(e,t,n){if(!e)throw Error("Token needed by ml service to sync file");let r=await this.getSyncContext(e,t,n);r.outOfSyncFiles=await E(t,200),r.outOfSyncFiles.length>0&&await this.syncFiles(r);let a=r.error,i=r.outOfSyncFiles.length;return!a&&i>0}async syncFiles(e){try{let t=e.outOfSyncFiles.map(t=>async()=>{await this.syncFileWithErrorHandler(e,t)});e.syncQueue.on("error",()=>{e.syncQueue.clear()}),await e.syncQueue.addAll(t)}catch(t){console.error("Error in sync job: ",t),e.error=t}await e.syncQueue.onIdle()}async getSyncContext(e,t,n){return this.syncContext?i.ZP.info("reusing existing syncContext"):(i.ZP.info("Creating syncContext"),this.syncContext=new Promise(r=>{r(new p(e,t,n))})),this.syncContext}async getLocalSyncContext(e,t,n){return this.localSyncContext?i.ZP.info("reusing existing localSyncContext"):(i.ZP.info("Creating localSyncContext"),this.localSyncContext=new Promise(r=>{r(new p(e,t,n))})),this.localSyncContext}async closeLocalSyncContext(){if(this.localSyncContext){i.ZP.info("Closing localSyncContext");let e=await this.localSyncContext;await e.dispose(),this.localSyncContext=void 0}}async syncLocalFile(e,t,n,r,a){}async syncFileWithErrorHandler(e,t,n){try{await this.syncFile(t,n,e.userAgent),e.nSyncedFiles+=1}catch(n){let t=n;switch("status"in t&&(t=(0,o.AN)(t)),t.message){case o.sH.SESSION_EXPIRED:case o.sH.NETWORK_ERROR:throw t}e.nSyncedFiles+=1}}async syncFile(e,t,n){let r=new w.y;await r.index(e,t,n)}}var m=new x;class O{async closeLocalSyncContext(){return m.closeLocalSyncContext()}async syncLocalFile(e,t,n,r,a){m.syncLocalFile(e,t,n,r,a)}async sync(e,t,n){return await a.Z.init(e),m.sync(e,t,n)}}(0,r.Jj)(O,self)},27176:function(e,t,n){"use strict";n.d(t,{F$:function(){return d},S6:function(){return i},uN:function(){return c},uZ:function(){return a}});var r=n(30862);let a=(e,t,n)=>Math.min(n,Math.max(t,e));function i(e,t,n,r,i){e=a(e,0,r-1),t=a(t,0,i-1);let l=Math.floor(e),c=Math.ceil(e),s=Math.floor(t),u=Math.ceil(t),d=e-l,f=t-s,h=1-d,y=1-f,g=o(n,r,i,l,s),E=o(n,r,i,c,s),w=o(n,r,i,l,u),p=o(n,r,i,c,u),b=(e,t,n,r)=>Math.round(e*h*y+t*d*y+n*h*f+r*d*f);return{r:b(g.r,E.r,w.r,p.r),g:b(g.g,E.g,w.g,p.g),b:b(g.b,E.b,w.b,p.b)}}let o=(e,t,n,r,a)=>{if(r<0||r>=t||a<0||a>=n)return{r:0,g:0,b:0,a:0};let i=(a*t+r)*4;return{r:e[i],g:e[i+1],b:e[i+2],a:e[i+3]}},l=(e,t,n,r,i)=>{var l,c,s,u,d,f,h,y,g,E,w,p,b,x,m,O,_,S,I,v,T,D,N,A,R,M,C,P,F,L,U,k,j,Z,G,H,W,B,Q,X,q,K,J,V,Y,z,$,ee;e=a(e,0,r-1),t=a(t,0,i-1);let et=Math.trunc(e)-(e>=0?0:1),en=et-1,er=et+1,ea=et+2,ei=Math.trunc(t)-(t>=0?0:1),eo=ei-1,el=ei+1,ec=ei+2,es=e-et,eu=t-ei,ed=o(n,r,i,et,ei),ef=en<0||eo<0?ed:o(n,r,i,en,eo),eh=en<0?ed:o(n,r,i,et,eo),ey=eo<0||er>=r?ed:o(n,r,i,er,eo),eg=ea>=r||eo<0?ed:o(n,r,i,ea,eo),eE=(l=ef.r,(c=eh.r)+.5*(es*(-l+(s=ey.r))+es*es*(2*l-5*c+4*s-(u=eg.r))+es*es*es*(-l+3*c-3*s+u))),ew=(d=ef.g,(f=eh.g)+.5*(es*(-d+(h=ey.g))+es*es*(2*d-5*f+4*h-(y=eg.g))+es*es*es*(-d+3*f-3*h+y))),ep=(g=ef.b,(E=eh.b)+.5*(es*(-g+(w=ey.b))+es*es*(2*g-5*E+4*w-(p=eg.b))+es*es*es*(-g+3*E-3*w+p))),eb=en<0?ed:o(n,r,i,en,ei),ex=er>=r?ed:o(n,r,i,er,ei),em=ea>=r?ed:o(n,r,i,ea,ei),eO=(b=eb.r,(x=ed.r)+.5*(es*(-b+(m=ex.r))+es*es*(2*b-5*x+4*m-(O=em.r))+es*es*es*(-b+3*x-3*m+O))),e_=(_=eb.g,(S=ed.g)+.5*(es*(-_+(I=ex.g))+es*es*(2*_-5*S+4*I-(v=em.g))+es*es*es*(-_+3*S-3*I+v))),eS=(T=eb.b,(D=ed.b)+.5*(es*(-T+(N=ex.b))+es*es*(2*T-5*D+4*N-(A=em.b))+es*es*es*(-T+3*D-3*N+A))),eI=en<0||el>=i?ed:o(n,r,i,en,el),ev=el>=i?ed:o(n,r,i,et,el),eT=er>=r||el>=i?ed:o(n,r,i,er,el),eD=ea>=r||el>=i?ed:o(n,r,i,ea,el),eN=(R=eI.r,(M=ev.r)+.5*(es*(-R+(C=eT.r))+es*es*(2*R-5*M+4*C-(P=eD.r))+es*es*es*(-R+3*M-3*C+P))),eA=(F=eI.g,(L=ev.g)+.5*(es*(-F+(U=eT.g))+es*es*(2*F-5*L+4*U-(k=eD.g))+es*es*es*(-F+3*L-3*U+k))),eR=(j=eI.b,(Z=ev.b)+.5*(es*(-j+(G=eT.b))+es*es*(2*j-5*Z+4*G-(H=eD.b))+es*es*es*(-j+3*Z-3*G+H))),eM=en<0||ec>=i?ed:o(n,r,i,en,ec),eC=ec>=i?ed:o(n,r,i,et,ec),eP=er>=r||ec>=i?ed:o(n,r,i,er,ec),eF=ea>=r||ec>=i?ed:o(n,r,i,ea,ec),eL=(W=eM.r,(B=eC.r)+.5*(es*(-W+(Q=eP.r))+es*es*(2*W-5*B+4*Q-(X=eF.r))+es*es*es*(-W+3*B-3*Q+X))),eU=(q=eM.g,(K=eC.g)+.5*(es*(-q+(J=eP.g))+es*es*(2*q-5*K+4*J-(V=eF.g))+es*es*es*(-q+3*K-3*J+V))),ek=(Y=eM.b,(z=eC.b)+.5*(es*(-Y+($=eP.b))+es*es*(2*Y-5*z+4*$-(ee=eF.b))+es*es*es*(-Y+3*z-3*$+ee)));return{r:Math.trunc(a(eO+.5*(eu*(-eE+eN)+eu*eu*(2*eE-5*eO+4*eN-eL)+eu*eu*eu*(-eE+3*eO-3*eN+eL)),0,255)),g:Math.trunc(a(e_+.5*(eu*(-ew+eA)+eu*eu*(2*ew-5*e_+4*eA-eU)+eu*eu*eu*(-ew+3*e_-3*eA+eU)),0,255)),b:Math.trunc(a(eS+.5*(eu*(-ep+eR)+eu*eu*(2*ep-5*eS+4*eR-ek)+eu*eu*eu*(-ep+3*eS-3*eR+ek)),0,255))}},c=(e,t,n,a,i)=>{let{width:o,height:c}=e,u=new OffscreenCanvas(o,c).getContext("2d");u.drawImage(e,0,0,o,c);let d=u.getImageData(0,0,o,c).data,f=t.map(e=>e.map(e=>1!=e?e*n:1)),h=new r.y3([[f[0][0],f[0][1]],[f[1][0],f[1][1]]]),y=(0,r.SO)(h),g=f[0][2],E=f[1][2],w=y.get(0,0),p=y.get(0,1),b=y.get(1,0),x=y.get(1,1);for(let e=0;e<n;++e)for(let t=0;t<n;++t){let{r,g:u,b:f}=l(w*(t-g)+p*(e-E),b*(t-g)+x*(e-E),d,o,c),h=(e*n+t)*3;a[i+h]=s(r),a[i+h+1]=s(u),a[i+h+2]=s(f)}},s=e=>e/127.5-1,u=e=>a(Math.round((e+1)*127.5),0,255),d=(e,t,n,r)=>{let i=t*n*r*3;return Array.from({length:r},(t,r)=>Array.from({length:n},(t,o)=>{let l=i+3*(r*n+o);return a(Math.round(.299*u(e[l])+.587*u(e[l+1])+.114*u(e[l+2])),0,255)}))}},87299:function(e,t,n){"use strict";n.d(t,{y:function(){return ee}});var r=n(96045),a=n(79541),i=n(21491),o=n(58178),l=n(42917),c=n(30290),s=n(30862),u=n(47371),d=n(23975),f=n(88619),h=n(57532);let y=async(e,t,n)=>{let r=E(e,n),a=await g(r);r.close();let i=await (0,h.Pr)("face-crops");return await i.put(t,a),a},g=e=>{let t=new OffscreenCanvas(e.width,e.height);return t.getContext("2d").drawImage(e,0,0),t.convertToBlob({type:"image/jpeg",quality:.8})},E=(e,t)=>{let n=w(p(t.boundingBox,1.5)),r={width:n.width,height:n.height},a=Math.min(256/n.width,256/n.height);a<1&&(r.width=Math.round(a*n.width),r.height=Math.round(a*n.height));let i=new OffscreenCanvas(r.width,r.height),o=i.getContext("2d");o.imageSmoothingQuality="high",o.translate(r.width/2,r.height/2);let l={x:-r.width/2,y:-r.height/2,width:r.width,height:r.height},c=p(n,1.5),s=p(l,1.5);return o.drawImage(e,c.x,c.y,c.width,c.height,s.x,s.y,s.width,s.height),i.transferToImageBitmap()},w=e=>{let[t,n,r,a]=[e.x,e.y,e.width,e.height].map(e=>Math.round(e));return{x:t,y:n,width:r,height:a}},p=(e,t)=>{let n={x:e.x+e.width/2,y:e.y+e.height/2},r=t*e.width,a=t*e.height;return{x:n.x-r/2,y:n.y-a/2,width:r,height:a}};var b=n(27176);let x=async(e,t,n)=>{let r=await m(e,t).then(createImageBitmap),{width:a,height:i}=r,o=e.id;try{return{fileID:o,width:a,height:i,faceEmbedding:{version:1,client:n,faces:await _(o,r)}}}finally{r.close()}},m=async(e,t)=>{if(e.metadata.fileType!=o.Gk.VIDEO)return t?(0,a.Qq)(e.metadata.title,t):O(e);{let t=await u.Z.getThumbnail(e);return new Blob([t])}},O=async e=>{let t=await u.Z.getFile(e),n=await new Response(t).blob(),r=e.metadata.fileType;if(r==o.Gk.IMAGE)return(0,a.Qq)(e.metadata.title,n);if(r==o.Gk.LIVE_PHOTO){let{imageFileName:t,imageData:r}=await (0,l.tc)(e.metadata.title,n);return(0,a.Qq)(t,new Blob([r]))}throw Error("Cannot index unsupported file type ".concat(r))},_=async(e,t)=>{let{width:n,height:a}=t,i={width:n,height:a},o=(await S(t)).map(t=>{let{box:n,landmarks:r,score:a}=t;return{faceID:M(e,n,i),detection:{box:n,landmarks:r},score:a}}),l=[];for(let{faceID:e,detection:n}of o){let a=C(n);l.push(a);try{await y(t,e,a)}catch(t){r.ZP.error("Failed to save face crop for faceID ".concat(e),t)}}let c=U(t,l),s=await B(c),u=k(c,o.map(e=>e.detection));return o.map((e,t)=>{let{faceID:n,detection:r,score:a}=e;return{faceID:n,detection:Q(r,i),score:a,blur:u[t],embedding:Array.from(s[t])}})},S=async e=>{let t=e=>{let{width:t,height:n}=e;return{x:0,y:0,width:t,height:n}},{yoloInput:n,yoloSize:r}=I(e);return A(T(v(await c.j.detectFaces(n)),t(r),t(e)),.4)},I=e=>{let{width:t,height:n}=e,r=new OffscreenCanvas(t,n).getContext("2d");r.drawImage(e,0,0,t,n);let a=r.getImageData(0,0,t,n).data,i=Math.min(640/t,640/n),o=(0,b.uZ)(Math.round(t*i),0,640),l=(0,b.uZ)(Math.round(n*i),0,640),c=new Float32Array(1228800),s=0;for(let e=0;e<640;e++)for(let r=0;r<640;r++){let{r:u,g:d,b:f}=r>=o||e>=l?{r:114,g:114,b:114}:(0,b.S6)(r/i,e/i,a,t,n);c[s]=u/255,c[s+409600]=d/255,c[s+819200]=f/255,s++}return{yoloInput:c,yoloSize:{width:o,height:l}}},v=e=>{let t=[];for(let n=0;n<e.length;n+=16){let r=e[n+4];if(r<.7)continue;let a=e[n],i=e[n+1],o=e[n+2],l=e[n+3],c=a-o/2,s=i-l/2,u=e[n+5],d=e[n+6],f=e[n+7],h=e[n+8],y=e[n+9],g=e[n+10],E=e[n+11],w=e[n+12],p=e[n+13],b=e[n+14],x={x:c,y:s,width:o,height:l},m=[{x:u,y:d},{x:f,y:h},{x:y,y:g},{x:E,y:w},{x:p,y:b}];t.push({box:x,landmarks:m,score:r})}return t},T=(e,t,n)=>{let r=D(t,n);return e.map(e=>({box:N(e.box,r),landmarks:e.landmarks.map(e=>(0,f.hC)(r,e)),score:e.score}))},D=(e,t)=>(0,f.qC)((0,f.Iu)(t.x,t.y),(0,f.bA)(t.width/e.width,t.height/e.height)),N=(e,t)=>{let n=(0,f.hC)(t,{x:e.x,y:e.y}),r=(0,f.hC)(t,{x:e.x+e.width,y:e.y+e.height});return{x:n.x,y:n.y,width:r.x-n.x,height:r.y-n.y}},A=(e,t)=>{e.sort((e,t)=>t.score-e.score);for(let n=0;n<e.length-1;n++)for(let r=n+1;r<e.length;r++)R(e[n],e[r])>=t&&(e.splice(r,1),r--);return e},R=(e,t)=>{let n=Math.max(e.box.x,t.box.x),r=Math.max(e.box.y,t.box.y),a=Math.min(e.box.x+e.box.width,t.box.x+t.box.width),i=Math.min(e.box.y+e.box.height,t.box.y+t.box.height),o=a-n,l=i-r;if(o<0||l<0)return 0;let c=e.box.width*e.box.height,s=t.box.width*t.box.height,u=o*l;return u/(c+s-u)},M=(e,t,n)=>{let r=e=>(0,b.uZ)(e,0,.999999).toFixed(5).substring(2),a=r(t.x/n.width),i=r(t.y/n.height),o=r((t.x+t.width)/n.width),l=r((t.y+t.height)/n.height);return["".concat(e),a,i,o,l].join("_")},C=e=>L(e,F(P,W)),P=[[38.2946,51.6963],[73.5318,51.5014],[56.0252,71.7366],[41.5493,92.3655],[70.7299,92.2041]],F=(e,t)=>e.map(e=>{let[n,r]=e;return[n/t,r/t]}),L=(e,t)=>{let n=new s.y3(e.landmarks.map(e=>[e.x,e.y]).slice(0,t.length)).transpose(),r=new s.y3(t).transpose(),a=(0,d.p)(n,r),i=s.y3.mul(a.rotation,a.scale),o=a.translation,l=[[i.get(0,0),i.get(0,1),o.get(0,0)],[i.get(1,0),i.get(1,1),o.get(1,0)],[0,0,1]],c=1/a.scale,u=a.toMean.sub(.5).mul(c),f=a.fromMean.sub(u),h={x:f.get(0,0),y:f.get(1,0)};return{affineMatrix:l,boundingBox:{x:h.x-c/2,y:h.y-c/2,width:c,height:c}}},U=(e,t)=>{let n=new Float32Array(t.length*W*W*3);for(let r=0;r<t.length;r++){let{affineMatrix:a}=t[r],i=r*W*W*3;(0,b.uN)(e,a,W,n,i)}return n},k=(e,t)=>t.map((t,n)=>H(Z((0,b.F$)(e,n,W,W),j(t)))),j=e=>{let{landmarks:t}=e,n=t[0],r=t[1],a=t[2],i=t[3],o=t[4],l=Math.abs(r.x-n.x),c=Math.abs(r.y-n.y),s=Math.abs(o.y-i.y),u=Math.max(n.y,r.y)+.5*c<a.y&&a.y+.5*s<Math.min(i.y,o.y),d=a.x<Math.min(n.x,r.x)&&a.x<Math.min(i.x,o.x),f=a.x>Math.max(n.x,r.x)&&a.x>Math.max(i.x,o.x),h=Math.abs(a.x-n.x)<.2*l,y=Math.abs(a.x-r.x)<.2*l;return d||u&&h?"left":f||u&&y?"right":"straight"},Z=(e,t)=>{let n=G(e,t),r=n.length-2,a=n[0].length-2,i=Array.from({length:r},()=>Array(a).fill(0)),o=[[0,1,0],[1,-4,1],[0,1,0]];for(let e=0;e<r;e++)for(let t=0;t<a;t++){let r=0;for(let a=0;a<3;a++)for(let i=0;i<3;i++)r+=n[e+a][t+i]*o[a][i];i[e][t]=r}return i},G=(e,t)=>{let n=e.length,r=e[0].length+2-56,a=Array.from({length:n+2},()=>Array(r).fill(0));if("straight"===t)for(let t=0;t<n;t++)for(let n=0;n<r-2;n++)a[t+1][n+1]=e[t][n+Math.round(28)];else if("left"===t)for(let t=0;t<n;t++)for(let n=0;n<r-2;n++)a[t+1][n+1]=e[t][n+56];else if("right"===t)for(let t=0;t<n;t++)for(let n=0;n<r-2;n++)a[t+1][n+1]=e[t][n];for(let e=1;e<=r-2;e++)a[0][e]=a[2][e],a[n+1][e]=a[n-1][e];for(let e=0;e<n+2;e++)a[e][0]=a[e][2],a[e][r-1]=a[e][r-3];return a},H=e=>{let t=e.length*e[0].length,n=0;e.forEach(e=>{e.forEach(e=>{n+=e})}),n/=t;let r=0;return e.forEach(e=>{e.forEach(e=>{let t=e-n;r+=t*t})}),r/=t},W=112,B=async e=>{let t=await c.j.computeFaceEmbeddings(e),n=Array(t.length/192);for(let e=0;e<n.length;e++)n[e]=new Float32Array(t.slice(192*e,(e+1)*192));return n},Q=(e,t)=>{let{width:n,height:r}=t,a=e.box;return{box:{x:a.x/n,y:a.y/r,width:a.width/n,height:a.height/r},landmarks:e.landmarks.map(e=>({x:e.x/n,y:e.y/r}))}};var X=n(88659),q=n(77033),K=n(18786),J=n(73873),V=n(95525);n(89610);var Y=n(94522);n(5155),n(82797),n(55071);let z=async e=>{try{let t=(0,q.iO)()?await c.j.getAuthToken():(0,Y.LP)();if(!t)throw r.ZP.info("putEmbedding failed: token not found"),Error(K.sH.TOKEN_MISSING);return(await J.Z.put("".concat((0,V.O3)(),"/embeddings"),e,null,{"X-Auth-Token":t})).data}catch(e){throw r.ZP.error("put embedding failed",e),e}},$=async(e,t)=>{r.ZP.debug(()=>({t:"Uploading faceEmbedding",d:JSON.stringify(t)}));let n=await X.Z.getInstance(),{file:a}=await n.encryptMetadata(t,e.key);await z({fileID:e.id,encryptedEmbedding:a.encryptedData,decryptionHeader:a.decryptionHeader,model:"file-ml-clip-face"})};class ee{async index(e,t,n){let o;let l=(0,a.wM)(e),c=Date.now();try{o=await x(e,t,n)}catch(t){throw r.ZP.error("Failed to index faces in ".concat(l),t),(0,i.IA)(e.id),t}try{await $(e,o),await (0,i.hl)(o)}catch(e){throw r.ZP.error("Failed to put/save face index for ".concat(l),e),e}return r.ZP.debug(()=>{let e=o.faceEmbedding.faces.length,t=Date.now()-c;return"Indexed ".concat(e," faces in ").concat(l," (").concat(t," ms)")}),o}closeFaceDB(){(0,i.Td)()}}},79541:function(e,t,n){"use strict";n.d(t,{$9:function(){return S},DJ:function(){return I},Qq:function(){return m},SA:function(){return _},c2:function(){return x},wM:function(){return b}});var r,a,i=n(58178),o=n(38229);n(42917);var l=n(54032),c=n(96045),s=n(5083),u=n(30290);n(88659),n(10005),n(24991);var d=n(72751),f=n.n(d);n(5155);var h=n(55151);n(47371);var y=n(33009);n(82797);var g=n(77060);n(40795),n(71583),n(63490);let E=["heic","rw2","tiff","arw","cr3","cr2","nef","psd","dng","tif"];(r=a||(a={}))[r.DOWNLOAD=0]="DOWNLOAD",r[r.FIX_TIME=1]="FIX_TIME",r[r.ARCHIVE=2]="ARCHIVE",r[r.UNARCHIVE=3]="UNARCHIVE",r[r.HIDE=4]="HIDE",r[r.TRASH=5]="TRASH",r[r.DELETE_PERMANENTLY=6]="DELETE_PERMANENTLY";class w{constructor(){this.isNativeJPEGConversionNotAvailable=!1}}let p=new w,b=e=>{var t;return"file ".concat(null!==(t=e.metadata.title)&&void 0!==t?t:"-"," (").concat(e.id,")")};async function x(e,t,n){var r;let a=(0,l.qN)(t.metadata.title);if(t.metadata.fileType!==i.Gk.IMAGE||null===(r=t.pubMagicMetadata)||void 0===r||!r.data.editedTime||"jpeg"!=a&&"jpg"!=a)return n;{let r=await new Response(n).blob();return(await (0,y.Qh)(e,r,new Date(t.pubMagicMetadata.data.editedTime/1e3))).stream()}}let m=async(e,t)=>{try{let n=new File([t],e),r=await (0,h.S)(n);c.ZP.debug(()=>"Need renderable image for ".concat(JSON.stringify({fileName:e,...r})));let{extension:a}=r;if(!(0,o.y)(a)){let n=r.mimeType;if(!n)return c.ZP.info("Trying to render a file without a MIME type",e),t;return new Blob([t],{type:n})}let i=!p.isNativeJPEGConversionNotAvailable;if(f()()&&i&&E.includes(a.toLowerCase()))try{return await O(t)}catch(e){e.message.endsWith(s.S.NotAvailable)?p.isNativeJPEGConversionNotAvailable=!0:c.ZP.error("Native conversion to JPEG failed",e)}if("heic"==a||"heif"==a)return await (0,g.x)(t);return}catch(t){c.ZP.error("Failed to get renderable image for ".concat(e),t);return}},O=async e=>{let t=Date.now(),n=new Uint8Array(await e.arrayBuffer()),r=globalThis.electron,a=r?await r.convertToJPEG(n):await u.j.convertToJPEG(n);return c.ZP.debug(()=>"Native JPEG conversion took ".concat(Date.now()-t," ms")),new Blob([a],{type:"image/jpeg"})};function _(e){return e.map(e=>{var t,n;return(null===(t=e.pubMagicMetadata)||void 0===t?void 0:t.data.editedTime)&&(e.metadata.creationTime=e.pubMagicMetadata.data.editedTime),(null===(n=e.pubMagicMetadata)||void 0===n?void 0:n.data.editedName)&&(e.metadata.title=e.pubMagicMetadata.data.editedName),e})}function S(e,t,n){if(!(null==t?void 0:t.id))throw Error("user missing");return e.filter(e=>e.ownerID===t.id&&(!n||n.get(e.collectionID)===t.id))}function I(e){return e.sort((e,t)=>e.id-t.id)}},57532:function(e,t,n){"use strict";n.d(t,{Pr:function(){return o}});var r=n(72751),a=n.n(r);let i=new Map,o=async e=>{let t=i.get(e);return t||i.set(e,t=await l(e)),t},l=async e=>a()()?s(e):c(e),c=async e=>{let t=await caches.open(e);return{get:async e=>{let n=await t.match(e);return await (null==n?void 0:n.blob())},put:(e,n)=>t.put(e,new Response(n)),delete:e=>t.delete(e)}},s=async e=>{let t=await navigator.storage.getDirectory(),n=await t.getDirectoryHandle("cache",{create:!0}),r=await n.getDirectoryHandle(e,{create:!0});return{get:async e=>{try{let t=await r.getFileHandle(e);return await t.getFile()}catch(e){if(e instanceof DOMException&&"NotFoundError"==e.name)return;throw e}},put:async(e,t)=>{let n=await r.getFileHandle(e,{create:!0}),a=await n.createWritable();await a.write(t),await a.close()},delete:async e=>{try{return await r.removeEntry(e),!0}catch(e){if(e instanceof DOMException&&"NotFoundError"==e.name)return!1;throw e}}}}},92396:function(e,t,n){"use strict";n.d(t,{F:function(){return o}});var r=n(30195);let a=r.z.object({id:r.z.number(),email:r.z.string(),token:r.z.string()}),i=()=>{let e=localStorage.getItem("user");if(e)return a.parse(JSON.parse(e))},o=()=>{let e=i();if(!e)throw Error("Not logged in");return e}},30290:function(e,t,n){"use strict";n.d(t,{j:function(){return r}});let r=(0,n(90758).Ud)(globalThis)},18786:function(e,t,n){"use strict";n.d(t,{AN:function(){return l},MS:function(){return a},Rp:function(){return i},sH:function(){return o}});var r=n(80613);class a extends Error{constructor(e,t,n){super(e),this.name="ApiError",this.errCode=t,this.httpStatusCode=n}}function i(e){return e&&"code"in e&&"message"in e}let o={VIDEO_PLAYBACK_FAILED:"video playback failed",ETAG_MISSING:"no header/etag present in response body",KEY_MISSING:"encrypted key missing from localStorage",FAILED_TO_LOAD_WEB_WORKER:"failed to load web worker",UNSUPPORTED_FILE_FORMAT:"unsupported file format",FILE_TOO_LARGE:"file too large",SUBSCRIPTION_EXPIRED:"subscription expired",STORAGE_QUOTA_EXCEEDED:"storage quota exceeded",SESSION_EXPIRED:"session expired",INVALID_MIME_TYPE:e=>"invalid mime type -".concat(e),SIGNUP_FAILED:"signup failed",FAV_COLLECTION_MISSING:"favorite collection missing",INVALID_COLLECTION_OPERATION:"invalid collection operation",TO_MOVE_FILES_FROM_MULTIPLE_COLLECTIONS:"to move files from multiple collections",REQUEST_CANCELLED:"request canceled",REQUEST_FAILED:"request failed",TOKEN_EXPIRED:"token expired",TOKEN_MISSING:"token missing",TOO_MANY_REQUESTS:"too many requests",BAD_REQUEST:"bad request",SUBSCRIPTION_NEEDED:"subscription not present",NOT_FOUND:"not found ",NO_METADATA:"no metadata",FILE_ID_NOT_FOUND:"file with id not found",WEAK_DEVICE:"password decryption failed on the device",INCORRECT_PASSWORD:"incorrect password",UPLOAD_CANCELLED:"upload cancelled",REQUEST_TIMEOUT:"request taking too long",HIDDEN_COLLECTION_SYNC_FILE_ATTEMPTED:"hidden collection sync file attempted",UNKNOWN_ERROR:"Something went wrong, please try again",WINDOWS_NATIVE_IMAGE_PROCESSING_NOT_SUPPORTED:"Windows native image processing is not supported",NETWORK_ERROR:"Network Error",NOT_FILE_OWNER:"not file owner",UPDATE_EXPORTED_RECORD_FAILED:"update file exported record failed",EXPORT_STOPPED:"export stopped",NO_EXPORT_FOLDER_SELECTED:"no export folder selected",EXPORT_FOLDER_DOES_NOT_EXIST:"export folder does not exist",AUTH_KEY_NOT_FOUND:"auth key not found",EXIF_DATA_NOT_FOUND:"exif data not found",SELECT_FOLDER_ABORTED:"select folder aborted",PROCESSING_FAILED:"processing failed",EXPORT_RECORD_JSON_PARSING_FAILED:"export record json parsing failed",TWO_FACTOR_ENABLED:"two factor enabled",PASSKEYS_TWO_FACTOR_ENABLED:"passkeys two factor enabled",CLIENT_ERROR:"client error",ServerError:"server error",FILE_NOT_FOUND:"file not found",UNSUPPORTED_PLATFORM:"Unsupported platform",UPDATE_URL_FILE_ID_MISMATCH:"update url file id mismatch",URL_ALREADY_SET:"url already set",FILE_CONVERSION_FAILED:"file conversion failed"};function l(e){let t=null;if(e instanceof a)switch(e.httpStatusCode){case r.WE.PaymentRequired:t=o.SUBSCRIPTION_EXPIRED;break;case r.WE.UpgradeRequired:t=o.STORAGE_QUOTA_EXCEEDED;break;case r.WE.Unauthorized:t=o.SESSION_EXPIRED;break;case r.WE.PayloadTooLarge:t=o.FILE_TOO_LARGE;break;default:t="".concat(o.UNKNOWN_ERROR," statusCode:").concat(e.httpStatusCode)}else t=e.message;return Error(t)}},94522:function(e,t,n){"use strict";n.d(t,{LP:function(){return a}});var r=n(10005);let a=()=>{var e;return null===(e=(0,r.Yu)(r.Pd.USER))||void 0===e?void 0:e.token}}},l={};function c(e){var t=l[e];if(void 0!==t)return t.exports;var n=l[e]={exports:{}},r=!0;try{o[e](n,n.exports,c),r=!1}finally{r&&delete l[e]}return n.exports}c.m=o,c.x=function(){var e=c.O(void 0,[1314,1239,2703,8055],function(){return c(44996)});return c.O(e)},e=[],c.O=function(t,n,r,a){if(n){a=a||0;for(var i=e.length;i>0&&e[i-1][2]>a;i--)e[i]=e[i-1];e[i]=[n,r,a];return}for(var o=1/0,i=0;i<e.length;i++){for(var n=e[i][0],r=e[i][1],a=e[i][2],l=!0,s=0;s<n.length;s++)o>=a&&Object.keys(c.O).every(function(e){return c.O[e](n[s])})?n.splice(s--,1):(l=!1,a<o&&(o=a));if(l){e.splice(i--,1);var u=r();void 0!==u&&(t=u)}}return t},c.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return c.d(t,{a:t}),t},c.d=function(e,t){for(var n in t)c.o(t,n)&&!c.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},c.f={},c.e=function(e){return Promise.all(Object.keys(c.f).reduce(function(t,n){return c.f[n](e,t),t},[]))},c.u=function(e){return"static/chunks/"+e+"."+({1239:"395088019dbe851e",1314:"2b00ee3e31acbe09",2703:"4ae8e717c0bd026b",2942:"05136459d3abfbbf",3201:"90f487bb3d2e71d7",6167:"58eb58bf88c76ab1",7644:"0e3a06ff10fd26df",8055:"980c7b8be20ca7ad"})[e]+".js"},c.miniCssF=function(e){},c.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||Function("return this")()}catch(e){if("object"==typeof window)return window}}(),c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.tt=function(){return void 0===t&&(t={createScriptURL:function(e){return e}},"undefined"!=typeof trustedTypes&&trustedTypes.createPolicy&&(t=trustedTypes.createPolicy("nextjs#bundler",t))),t},c.tu=function(e){return c.tt().createScriptURL(e)},c.p="/_next/",c.b=self.location+"/../../../",n={4996:1},c.f.i=function(e,t){n[e]||importScripts(c.tu(c.p+c.u(e)))},a=(r=self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push.bind(r),r.push=function(e){var t=e[0],r=e[1],i=e[2];for(var o in r)c.o(r,o)&&(c.m[o]=r[o]);for(i&&i(c);t.length;)n[t.pop()]=1;a(e)},i=c.x,c.x=function(){return Promise.all([1314,1239,2703,8055].map(c.e,c)).then(i)},_N_E=c.x()}();