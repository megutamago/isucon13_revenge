import{b as d,m as p,f as x,j as e,S as j,I as n,B as i,o as h,L as f,h as g}from"./index-55457d82.js";import{u as v}from"./index.esm-bd2deef7.js";import{F as s,a as u}from"./FormLabel-c342aa29.js";function S(){const a=v(),r=d(),l=p(),c=x({revalidateIfStale:!1,revalidateOnFocus:!1,revalidateOnMount:!1,revalidateOnReconnect:!1}),m=async o=>{try{const t=await g.post$login({requestBody:{username:o.username,password:o.password}});console.log(t),r.add({type:"success",title:"Login Success",message:"ログインに成功しました"},{timeout:3e3}),await Promise.all([c.mutate()]),l("/")}catch(t){console.warn(t),r.add({type:"error",title:"Login Failed",message:"ログインに失敗しました"},{timeout:3e3})}};return e.jsx("form",{onSubmit:a.handleSubmit(m),children:e.jsxs(j,{maxWidth:"500px",mx:"auto",my:5,gap:3,children:[e.jsxs(s,{children:[e.jsx(u,{children:"Username"}),e.jsx(n,{...a.register("username"),required:!0})]}),e.jsxs(s,{children:[e.jsx(u,{children:"Password"}),e.jsx(n,{...a.register("password"),required:!0})]}),e.jsx(s,{children:e.jsx(i,{type:"submit",children:"ログイン"})}),e.jsx(h,{}),e.jsx(s,{children:e.jsx(i,{component:f,to:"/account/signup",variant:"plain",children:"新規登録"})})]})})}export{S as default};
