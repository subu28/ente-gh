(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7616],{90492:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/signup",function(){return r(13222)}])},13222:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return Z}});var a=r(52903),n=r(50918),l=r(10005),i=r(89449),s=r(46470),o=r(42898),d=r(5632),c=r(2784),u=r(39568),h=e=>{let{appContext:t}=e,{appName:r}=t,[h,p]=(0,c.useState)(!0),Z=(0,d.useRouter)();return(0,c.useEffect)(()=>{let e=(0,l.Yu)(l.Pd.USER);(null==e?void 0:e.email)&&Z.push(n.q.VERIFY),p(!1),t.showNavBar(!0)},[]),(0,a.tZ)(i.wx,{children:h?(0,a.tZ)(s.Z,{}):(0,a.tZ)(o.Z,{children:(0,a.tZ)(u.M,{login:()=>{Z.push(n.q.LOGIN)},router:Z,appName:r})})})},p=r(77024),Z=()=>(0,a.tZ)(h,{appContext:(0,p.useAppContext)()})},39568:function(e,t,r){"use strict";r.d(t,{M:function(){return k}});var a=r(52903),n=r(96045),l=r(92660),i=r(54196),s=r(50918),o=r(49521),d=r(58627),c=r(10005),u=r(89449),h=r(16950),p=r(77754),Z=r(83422),m=r(95770),E=r(47290),_=r(2299),f=r(94522),R=r(24450),w=r(89025),S=r(51464),N=r(24862),A=r(62197),I=r(35469),C=r(2672),T=r(85801),P=r(93506),x=r(52616),b=r(61035),O=r(23119),g=r(63602),v=r(24991),y=r(2784),U=r(98614),D=r(48601);function k(e){let{router:t,appName:r,login:k}=e,[B,L]=(0,y.useState)(!1),[M,X]=(0,y.useState)(!1),[F,Y]=(0,y.useState)(!1),G=()=>{Y(!F)},H=e=>{e.preventDefault()},W=async(e,a)=>{let{email:i,passphrase:o,confirm:u,referral:h}=e,{setFieldError:p}=a;try{if(o!==u){p("confirm",(0,v.t)("PASSPHRASE_MATCH_ERROR"));return}X(!0);try{(0,c.a_)(c.Pd.USER,{email:i}),(0,f.je)(h),await (0,l.Tb)(r,i)}catch(t){let e=t instanceof Error?t.message:"";throw p("confirm","".concat((0,v.t)("UNKNOWN_ERROR")," ").concat(e)),t}try{let{keyAttributes:e,masterKey:r,srpSetupAttributes:a}=await (0,d.j)(o);(0,c.a_)(c.Pd.ORIGINAL_KEY_ATTRIBUTES,e),(0,c.a_)(c.Pd.SRP_SETUP_ATTRIBUTES,a),await (0,_.iv)(o,e,r),await (0,_.CP)(R.Qm.ENCRYPTION_KEY,r),(0,f.n_)(!0),t.push(s.q.VERIFY)}catch(e){throw p("confirm",(0,v.t)("PASSWORD_GENERATION_FAILED")),e}}catch(e){n.ZP.error("signup failed",e)}X(!1)};return(0,a.BX)(a.HY,{children:[(0,a.BX)(p.Z,{children:[" ",(0,v.t)("SIGN_UP")]}),(0,a.tZ)(g.J9,{initialValues:{email:"",passphrase:"",confirm:"",referral:""},validationSchema:D.Ry().shape({email:D.Z_().email((0,v.t)("EMAIL_ERROR")).required((0,v.t)("REQUIRED")),passphrase:D.Z_().required((0,v.t)("REQUIRED")),confirm:D.Z_().required((0,v.t)("REQUIRED"))}),validateOnChange:!1,validateOnBlur:!1,onSubmit:W,children:e=>{let{values:t,errors:r,handleChange:n,handleSubmit:l}=e;return(0,a.BX)("form",{noValidate:!0,onSubmit:l,children:[(0,a.BX)(u.wx,{sx:{mb:1},children:[(0,a.tZ)(S.Z,{fullWidth:!0,id:"email",name:"email",autoComplete:"username",type:"email",label:(0,v.t)("ENTER_EMAIL"),value:t.email,onChange:n("email"),error:!!r.email,helperText:r.email,autoFocus:!0,disabled:M}),(0,a.tZ)(S.Z,{fullWidth:!0,id:"password",name:"password",autoComplete:"new-password",type:F?"text":"password",label:(0,v.t)("PASSPHRASE_HINT"),value:t.passphrase,onChange:n("passphrase"),error:!!r.passphrase,helperText:r.passphrase,disabled:M,InputProps:{endAdornment:(0,a.tZ)(Z.Z,{showPassword:F,handleClickShowPassword:G,handleMouseDownPassword:H})}}),(0,a.tZ)(S.Z,{fullWidth:!0,id:"confirm-password",name:"confirm-password",autoComplete:"new-password",type:"password",label:(0,v.t)("CONFIRM_PASSPHRASE"),value:t.confirm,onChange:n("confirm"),error:!!r.confirm,helperText:r.confirm,disabled:M}),(0,a.tZ)(i.L,{password:t.passphrase}),(0,a.BX)(N.Z,{sx:{width:"100%"},children:[(0,a.tZ)(A.Z,{textAlign:"left",color:"text.secondary",mt:"24px",children:(0,v.t)("REFERRAL_CODE_HINT")}),(0,a.tZ)(S.Z,{hiddenLabel:!0,InputProps:{endAdornment:(0,a.tZ)(I.Z,{position:"end",children:(0,a.tZ)(C.Z,{title:(0,v.t)("REFERRAL_INFO"),children:(0,a.tZ)(T.Z,{tabIndex:-1,color:"secondary",edge:"end",children:(0,a.tZ)(w.Z,{})})})})},fullWidth:!0,name:"referral",type:"text",value:t.referral,onChange:n("referral"),error:!!r.referral,disabled:M})]}),(0,a.tZ)(P.Z,{sx:{width:"100%"},children:(0,a.tZ)(x.Z,{sx:{color:"text.muted",ml:0,mt:2,mb:0},control:(0,a.tZ)(b.Z,{size:"small",disabled:M,checked:B,onChange:e=>L(e.target.checked),color:"accent"}),label:(0,a.tZ)(A.Z,{variant:"small",children:(0,a.tZ)(U.cC,{i18nKey:"TERMS_AND_CONDITIONS",components:{a:(0,a.tZ)(O.Z,{href:"https://ente.io/terms",target:"_blank"}),b:(0,a.tZ)(O.Z,{href:"https://ente.io/privacy",target:"_blank"})}})})})})]}),(0,a.BX)(N.Z,{mb:4,children:[(0,a.tZ)(E.Z,{sx:{my:0},buttonText:(0,v.t)("CREATE_ACCOUNT"),loading:M,disabled:!B||(0,o.DZ)(t.passphrase)}),M&&(0,a.tZ)(A.Z,{mt:1,textAlign:"center",color:"text.muted",variant:"small",children:(0,v.t)("KEY_GENERATION_IN_PROGRESS_MESSAGE")})]})]})}}),(0,a.tZ)(h.Z,{children:(0,a.tZ)(m.Z,{onClick:k,children:(0,v.t)("ACCOUNT_EXISTS")})})]})}},42898:function(e,t,r){"use strict";var a=r(65992),n=r(17377);let l=(0,a.ZP)(n.Z)(e=>{let{theme:t}=e;return{padding:t.spacing(4,2),maxWidth:"360px",width:"100%",textAlign:"left"}});t.Z=l}},function(e){e.O(0,[8934,1981,3602,4100,7518,3988,2672,3432,3313,7332,1263,2888,9774,179],function(){return e(e.s=90492)}),_N_E=e.O()}]);