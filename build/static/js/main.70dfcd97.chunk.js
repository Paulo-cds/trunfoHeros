(this["webpackJsonpsuper-hero"]=this["webpackJsonpsuper-hero"]||[]).push([[0],{45:function(e,t,n){},68:function(e,t,n){"use strict";n.r(t);var r,a,i,s,c,o,l,j,b=n(0),d=n.n(b),p=n(31),h=n.n(p),x=(n(45),n(19)),u=n.n(x),O=n(32),g=n(20),m=n(33),w=n.n(m),v=n(82),y=n(38),f=n(6),k=n(7),S=k.a.div(r||(r=Object(f.a)(["\n    width: 100%;    \n    background-color: black;\n    min-height: 100vh;\n"]))),C=k.a.div(a||(a=Object(f.a)(["\n    position: absolute;\n    top: 40%;\n    left: 43%;\n    z-index: 9;\n"]))),I=k.a.input(i||(i=Object(f.a)(["\n    position: absolute;\n    top: 20px;\n    left: 35%;\n    width: 30%;\n    height: 50px;\n    border-radius: 40px;\n    background: red;\n    border: 1px solid black;\n    box-shadow: 0 0 15px red;\n    text-align: center;\n    font-size: 1.5rem;\n\n    @media(max-width: 768px){\n        width: 60%;\n        left: 20%;\n    }\n"]))),R=k.a.div(s||(s=Object(f.a)(["\n    display: flex;\n    width: 100%;    \n    position: absolute;\n    top: 50px;\n    justify-content: center;\n    flex-wrap: wrap;\n    margin-top: 70px;\n    background-color: black;    \n"]))),z=k.a.div(c||(c=Object(f.a)(["\n    display: flex;\n    width: 40%;\n    justify-content: space-between;\n    margin: 1.5rem 1rem;\n    border: 1px solid black;\n    text-align: center;    \n    background: white;\n    box-shadow: 2px 2px 5px rgb(227, 230, 229);\n\n    @media(max-width: 768px){\n        width: 80%;\n    }\n"]))),B=k.a.img(o||(o=Object(f.a)(["\n    width: 50%;\n"]))),D=k.a.li(l||(l=Object(f.a)(["\n    margin: .7rem auto\n"]))),J=k.a.span(j||(j=Object(f.a)(["\n    position: absolute;\n    margin-top: -7%;\n    color: yellow;\n"]))),P=n(37),W=n.n(P),A=n(2),E=function(){var e=Object(b.useState)([]),t=Object(g.a)(e,2),n=t[0],r=t[1],a=Object(b.useState)("none"),i=Object(g.a)(a,2),s=i[0],c=i[1],o=Object(y.a)((function(e){return{root:{height:15,borderRadius:5},colorPrimary:{backgroundColor:"grey"},bar:{borderRadius:5,backgroundColor:"red"}}}))(v.a);function l(){return(l=Object(O.a)(u.a.mark((function e(t){var n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c("block"),e.next=3,w()("https://www.superheroapi.com/api.php/3992681667526682/search/".concat(t));case 3:return n=e.sent,e.next=6,r(n.data.results);case 6:return e.next=8,c("none");case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(A.jsxs)(S,{children:[Object(A.jsx)(C,{style:{display:s},children:Object(A.jsx)(W.a,{type:"cylon",color:"red",height:367,width:175})}),Object(A.jsx)(I,{label:"Search",type:"text",onChange:function(e){!function(e){l.apply(this,arguments)}(e.target.value)},name:"inputs"}),Object(A.jsx)(R,{children:n?n.map((function(e){return Object(A.jsx)(A.Fragment,{children:Object(A.jsxs)(z,{children:[Object(A.jsx)(B,{src:e.image.url}),Object(A.jsxs)("ul",{style:{padding:5},children:[Object(A.jsx)("li",{children:Object(A.jsxs)("h3",{children:["ID: ",e.id," - Nome: ",e.name]})}),Object(A.jsxs)(D,{children:[Object(A.jsx)("h4",{children:"Powerstats"}),Object(A.jsxs)("ul",{children:[Object(A.jsxs)("li",{style:{position:"relative",margin:"5px auto"},children:["Intelligence: ",Object(A.jsx)("br",{}),Object(A.jsx)(o,{variant:"determinate",value:e.powerstats.intelligence}),Object(A.jsxs)(J,{children:[e.powerstats.intelligence,"%"]})]}),Object(A.jsxs)("li",{style:{position:"relative",margin:"5px auto"},children:["Strength: ",Object(A.jsx)("br",{}),Object(A.jsx)(o,{variant:"determinate",value:e.powerstats.strength}),Object(A.jsxs)(J,{children:[e.powerstats.strength,"%"]})]}),Object(A.jsxs)("li",{style:{position:"relative",margin:"5px auto"},children:["Speed: ",Object(A.jsx)("br",{}),Object(A.jsx)(o,{variant:"determinate",value:e.powerstats.speed}),Object(A.jsxs)(J,{children:[e.powerstats.speed,"%"]})]}),Object(A.jsxs)("li",{style:{position:"relative",margin:"5px auto"},children:["Durability: ",Object(A.jsx)("br",{}),Object(A.jsx)(o,{variant:"determinate",value:e.powerstats.durability}),Object(A.jsxs)(J,{children:[e.powerstats.durability,"%"]})]}),Object(A.jsxs)("li",{style:{position:"relative",margin:"5px auto"},children:["Combat: ",Object(A.jsx)("br",{}),Object(A.jsx)(o,{variant:"determinate",value:e.powerstats.combat}),Object(A.jsxs)(J,{children:[e.powerstats.combat,"%"]})]})]})]}),Object(A.jsxs)(D,{children:[Object(A.jsx)("h4",{children:"Appearance"}),Object(A.jsxs)("ul",{children:[Object(A.jsxs)("li",{children:["Gender = ",e.appearance.gender]}),Object(A.jsxs)("li",{children:["Race = ",e.appearance.race]}),Object(A.jsxs)("li",{children:["Height = ",e.appearance.height]}),Object(A.jsxs)("li",{children:["Weight = ",e.appearance.weight]})]})]}),Object(A.jsxs)(D,{children:[Object(A.jsx)("h4",{children:"Work"}),Object(A.jsxs)("ul",{children:[Object(A.jsxs)("li",{children:["Occupation = ",e.work.occupation]}),Object(A.jsxs)("li",{children:["Base = ",e.work.base]})]})]})]})]})})})):""})]})};var F=function(){return Object(A.jsx)(E,{})};h.a.render(Object(A.jsx)(d.a.StrictMode,{children:Object(A.jsx)(F,{})}),document.getElementById("root"))}},[[68,1,2]]]);
//# sourceMappingURL=main.70dfcd97.chunk.js.map