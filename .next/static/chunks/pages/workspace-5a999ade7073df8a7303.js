_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[11],{"/yfl":function(e,t,s){e.exports={taskList:"styles_taskList__1ug9W",DeleteBtn:"styles_DeleteBtn__nerD_",Minus:"styles_Minus__1etxo"}},"1WDb":function(e,t,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/workspace",function(){return s("SRkQ")}])},"5/Hw":function(e,t,s){e.exports={Row:"styles_Row__f__mk",Container:"styles_Container__2qk6X",OuterCircle:"styles_OuterCircle__1sF60",InnerCircle:"styles_InnerCircle__Uf14l",Session:"styles_Session__15UDB",Break:"styles_Break__2S85E"}},"8wnI":function(e,t,s){e.exports={taskStatus:"styles_taskStatus__2ySVv",taskList:"styles_taskList__25jDB"}},ErLb:function(e,t,s){e.exports={taskLabel:"styles_taskLabel__hpXK3",InputField:"styles_InputField__3e3hz",input:"styles_input__28dUS",addBtn:"styles_addBtn__GYWhH"}},RE3r:function(e,t,s){e.exports={keys:"styles_keys__i5jm-",button1:"styles_button1__1tOC0",button2:"styles_button2__2aVYa",button3:"styles_button3__1jvsw",timerFont:"styles_timerFont__16ZQZ",timerStatus:"styles_timerStatus__3AE3U"}},SRkQ:function(e,t,s){"use strict";s.r(t);var n=s("nKUr"),i=s("1OyB"),r=s("vuIU"),a=s("Ji7U"),c=s("md7G"),o=s("foSv"),l=s("q1tI"),u=s.n(l),d=s("rmr5"),b=s("kB3I"),j=s("xemT"),f=s("rePB"),h=s("y0G4"),m=s.n(h);function _(e,t){(null==t||t>e.length)&&(t=e.length);for(var s=0,n=new Array(t);s<t;s++)n[s]=e[s];return n}function O(e){return function(e){if(Array.isArray(e))return _(e)}(e)||function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(e){if("string"===typeof e)return _(e,t);var s=Object.prototype.toString.call(e).slice(8,-1);return"Object"===s&&e.constructor&&(s=e.constructor.name),"Map"===s||"Set"===s?Array.from(e):"Arguments"===s||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(s)?_(e,t):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}let p=(e=21)=>{let t="",s=crypto.getRandomValues(new Uint8Array(e));for(;e--;){let n=63&s[e];t+=n<36?n.toString(36):n<62?(n-26).toString(36).toUpperCase():n<63?"_":"-"}return t};var y=s("/yfl"),v=s.n(y);function k(e){return Object(n.jsx)("li",{children:Object(n.jsxs)("div",{children:[Object(n.jsx)("label",{className:v.a.taskList,htmlFor:e.id,children:e.name}),Object(n.jsx)("div",{className:"btn-group",children:Object(n.jsx)("button",{type:"button",className:v.a.DeleteBtn,onClick:function(){return e.deleteTask(e.id)},children:Object(n.jsx)("div",{className:v.a.Minus})})})]})})}var x=s("ErLb"),S=s.n(x);var T=function(e){var t=Object(l.useState)(""),s=t[0],i=t[1];return Object(n.jsx)("form",{onSubmit:function(t){t.preventDefault(),s.length>0?(e.addTask(s),i("")):i("")},children:Object(n.jsxs)("div",{className:S.a.InputField,children:[Object(n.jsx)("input",{type:"text",id:"new-todo-input",className:S.a.input,name:"text",autoComplete:"off",value:s,onChange:function(e){i(e.target.value)}}),Object(n.jsx)("button",{type:"submit",className:S.a.addBtn,children:Object(n.jsx)("div",{children:"Add"})})]})})},N=s("8wnI"),g=s.n(N);var B=function(e){var t=Object(l.useState)(e.tasks),s=t[0],i=t[1];function r(e){var t=s.filter((function(t){return e!==t.id}));i(t)}var a=s.map((function(e){return Object(n.jsx)(k,{id:e.id,name:e.name,completed:e.completed,deleteTask:r},e.key)})),c=1!==a.length?"tasks":"task",o="".concat(a.length," ").concat(c," remaining");return Object(n.jsxs)("div",{className:"",children:[Object(n.jsx)("h2",{className:g.a.taskStatus,children:o}),Object(n.jsx)("ul",{role:"list",className:g.a.taskList,"aria-labelledby":"list-heading",children:a}),Object(n.jsx)(T,{addTask:function(e){var t={id:"todo-"+p(),name:e,completed:!1};i([].concat(O(s),[t]))}})]})},R=s("JX7q"),w=s("5/Hw"),C=s.n(w),D=s("sGsj"),I=s.n(D);function M(e){return Object(n.jsxs)("div",{children:[Object(n.jsx)("div",{className:I.a.BreakTitle,children:"Break"}),Object(n.jsxs)("div",{className:I.a.Row,children:[Object(n.jsx)("button",{className:I.a.Buttons,onClick:function(){15!==e.break&&e.increaseBreak()},children:"+"}),Object(n.jsx)("div",{className:I.a.Digit,children:e.break}),Object(n.jsx)("button",{className:I.a.Buttons,onClick:function(){1!==e.break&&e.decreaseBreak()},children:"-"})]})]})}var P=s("X8nu"),E=s.n(P);function A(e){return Object(n.jsxs)("div",{children:[Object(n.jsx)("div",{className:E.a.SessionTitle,children:"Study"}),Object(n.jsxs)("div",{className:E.a.Row,children:[Object(n.jsx)("button",{className:E.a.Buttons,onClick:function(){120!==e.session&&e.increaseSession()},children:"+"}),Object(n.jsx)("div",{className:E.a.Digit,children:e.session}),Object(n.jsx)("button",{className:E.a.Buttons,onClick:function(){25!==e.session&&e.decreaseSession()},children:"-"})]})]})}var L=s("RE3r"),F=s.n(L);s("Aiso");function U(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var s,n=Object(o.a)(e);if(t){var i=Object(o.a)(this).constructor;s=Reflect.construct(n,arguments,i)}else s=n.apply(this,arguments);return Object(c.a)(this,s)}}var G=function(e){Object(a.a)(s,e);var t=U(s);function s(){var e;return Object(i.a)(this,s),(e=t.call(this)).state={Session:!0,TimerSecond:0,intervalId:0},e.start=e.start.bind(Object(R.a)(e)),e.stop=e.stop.bind(Object(R.a)(e)),e.reset=e.reset.bind(Object(R.a)(e)),e.decreaseTimer=e.decreaseTimer.bind(Object(R.a)(e)),e}return Object(r.a)(s,[{key:"start",value:function(){var e=setInterval(this.decreaseTimer,1e3);this.setState({intervalId:e})}},{key:"stop",value:function(){clearInterval(this.state.intervalId)}},{key:"reset",value:function(){this.stop(),this.props.ResetTimer(),this.setState({TimerSecond:0})}},{key:"decreaseTimer",value:function(){switch(this.state.TimerSecond){case 0:0===this.props.TimerMinute&&(this.state.Session?(this.setState({Session:!1}),this.props.ToggleSession(this.state.Session)):(this.setState({Session:!0}),this.props.ToggleSession(this.state.Session))),this.props.decreaseTimerMinute(),this.setState({TimerSecond:59});break;default:this.setState((function(e){return{TimerSecond:e.TimerSecond-1}}))}}},{key:"render",value:function(){return Object(n.jsxs)("div",{children:[Object(n.jsx)("div",{className:F.a.timerStatus,children:!0===this.state.Session?"Study":"Break"}),Object(n.jsx)("span",{className:F.a.timerFont,children:this.props.TimerMinute}),Object(n.jsx)("span",{className:F.a.timerFont,children:":"}),Object(n.jsx)("span",{className:F.a.timerFont,children:0===this.state.TimerSecond?"00":this.state.TimerSecond<10?"0"+this.state.TimerSecond:this.state.TimerSecond}),Object(n.jsxs)("div",{className:F.a.keys,children:[Object(n.jsx)("button",{className:F.a.button1,onClick:this.start,children:Object(n.jsx)("img",{src:"/start.png",width:"40px",height:"40px"})}),Object(n.jsx)("button",{className:F.a.button2,onClick:this.stop,children:Object(n.jsx)("img",{src:"/stop.png",width:"40px",height:"40px"})}),Object(n.jsx)("button",{className:F.a.button3,onClick:this.reset,children:Object(n.jsx)("img",{src:"/reset.png",width:"40px",height:"40px"})})]})]})}}]),s}(l.Component);function H(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var s,n=Object(o.a)(e);if(t){var i=Object(o.a)(this).constructor;s=Reflect.construct(n,arguments,i)}else s=n.apply(this,arguments);return Object(c.a)(this,s)}}var X=function(e){Object(a.a)(s,e);var t=H(s);function s(){var e;return Object(i.a)(this,s),(e=t.call(this)).state={break:1,session:25,TimerMinute:25},e.onIncreaseSession=e.onIncreaseSession.bind(Object(R.a)(e)),e.onDecreaseSession=e.onDecreaseSession.bind(Object(R.a)(e)),e.onIncreaseBreak=e.onIncreaseBreak.bind(Object(R.a)(e)),e.onDecreaseBreak=e.onDecreaseBreak.bind(Object(R.a)(e)),e.onToggleSession=e.onToggleSession.bind(Object(R.a)(e)),e.onDecreaseTimerMinute=e.onDecreaseTimerMinute.bind(Object(R.a)(e)),e.onReset=e.onReset.bind(Object(R.a)(e)),e}return Object(r.a)(s,[{key:"onIncreaseSession",value:function(){this.setState((function(e){return{session:e.session+5,TimerMinute:e.session+5}}))}},{key:"onDecreaseSession",value:function(){this.setState((function(e){return{session:e.session-5,TimerMinute:e.session-5}}))}},{key:"onIncreaseBreak",value:function(){this.setState((function(e){return{break:e.break+1}}))}},{key:"onDecreaseBreak",value:function(){this.setState((function(e){return{break:e.break-1}}))}},{key:"onDecreaseTimerMinute",value:function(){this.setState((function(e){return{TimerMinute:e.TimerMinute-1}}))}},{key:"onToggleSession",value:function(e){e?this.state({TimerMinute:this.state.session}):this.setState({TimerMinute:this.state.break})}},{key:"onReset",value:function(){this.setState({TimerMinute:this.state.session})}},{key:"render",value:function(){return Object(n.jsx)("div",{children:Object(n.jsx)("div",{className:C.a.Container,children:Object(n.jsxs)("div",{className:C.a.Row,children:[Object(n.jsx)("div",{className:C.a.Session,children:Object(n.jsx)(A,{session:this.state.session,increaseSession:this.onIncreaseSession,decreaseSession:this.onDecreaseSession})}),Object(n.jsxs)("div",{className:C.a.OuterCircle,children:[Object(n.jsx)("div",{className:C.a.InnerCircle,children:Object(n.jsx)(G,{TimerMinute:this.state.TimerMinute,break:this.state.break,decreaseTimerMinute:this.onDecreaseTimerMinute,ToggleSession:this.onToggleSession,ResetTimer:this.onReset})})," "]}),Object(n.jsx)("div",{className:C.a.Break,children:Object(n.jsx)(M,{break:this.state.break,increaseBreak:this.onIncreaseBreak,decreaseBreak:this.onDecreaseBreak})})]})})})}}]),s}(l.Component);function Q(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var s,n=Object(o.a)(e);if(t){var i=Object(o.a)(this).constructor;s=Reflect.construct(n,arguments,i)}else s=n.apply(this,arguments);return Object(c.a)(this,s)}}var V=[],W=function(e){Object(a.a)(s,e);var t=Q(s);function s(e){var n;return Object(i.a)(this,s),(n=t.call(this,e)).state={pomodoro:!1,todolist:!0},n}return Object(r.a)(s,[{key:"ShowPomo",value:function(){this.setState({pomodoro:!0,todolist:!1})}},{key:"HidePomo",value:function(){this.setState({pomodoro:!1,todolist:!0})}},{key:"render",value:function(){var e,t,s=this;return Object(n.jsx)("div",{className:"d-flex justify-content-center text-center",children:Object(n.jsx)("div",{className:m.a.mainContainer,children:Object(n.jsxs)("div",{className:"d-flex justify-content-center text-center",children:[Object(n.jsxs)("div",{className:m.a.tabBox,children:[Object(n.jsx)("div",(e={onClick:function(){return s.HideTodo()}},Object(f.a)(e,"onClick",(function(){return s.ShowPomo()})),Object(f.a)(e,"className",m.a.pomodoroTab),Object(f.a)(e,"children","Pomodoro"),e)),Object(n.jsx)("div",{className:"d-flex justify-content-center",children:Object(n.jsx)("div",(t={onClick:function(){return s.ShowTodo()}},Object(f.a)(t,"onClick",(function(){return s.HidePomo()})),Object(f.a)(t,"className",m.a.todolistTab),Object(f.a)(t,"children","To-do List"),t))}),Object(n.jsx)("div",{className:m.a.trackerTab,children:"Tracker"})]}),Object(n.jsxs)("div",{className:m.a.tool1,children:[this.state.todolist?Object(n.jsx)(B,{tasks:V}):null,this.state.pomodoro?Object(n.jsx)("div",{className:m.a.tool2,children:this.state.pomodoro?Object(n.jsx)(X,{}):null}):null]})]})})})}}]),s}(u.a.Component),J=s("dQT2"),q=s.n(J);function K(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var s,n=Object(o.a)(e);if(t){var i=Object(o.a)(this).constructor;s=Reflect.construct(n,arguments,i)}else s=n.apply(this,arguments);return Object(c.a)(this,s)}}var z=function(e){Object(a.a)(s,e);var t=K(s);function s(){return Object(i.a)(this,s),t.apply(this,arguments)}return Object(r.a)(s,[{key:"render",value:function(){return Object(n.jsx)("div",{className:q.a.containerColor,children:Object(n.jsx)(d.a,{children:Object(n.jsxs)("span",{children:[Object(n.jsx)(b.a,{}),Object(n.jsx)(W,{}),Object(n.jsx)(j.a,{})]})})})}}]),s}(l.Component);t.default=z},X8nu:function(e,t,s){e.exports={SessionTitle:"styles_SessionTitle__1lzmF",Buttons:"styles_Buttons__gq9CA",Digit:"styles_Digit__2V62s",Row:"styles_Row__3Dvvs"}},dQT2:function(e,t,s){e.exports={containerColor:"styles_containerColor__1V_N4"}},sGsj:function(e,t,s){e.exports={BreakTitle:"styles_BreakTitle__W8b55",Buttons:"styles_Buttons__2aOP5",Digit:"styles_Digit__1QV68",Row:"styles_Row__3nK6a"}},y0G4:function(e,t,s){e.exports={mainContainer:"styles_mainContainer__3k4fE",tabBox:"styles_tabBox__203L4",tool1:"styles_tool1__x7GBf",tool2:"styles_tool2__25dt8",pomodoroTab:"styles_pomodoroTab__3KIjc",todolistTab:"styles_todolistTab__1NkJW",trackerTab:"styles_trackerTab__1DPRH"}}},[["1WDb",0,2,1,3]]]);