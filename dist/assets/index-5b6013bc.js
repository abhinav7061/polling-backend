import{R as s,r as g,j as t}from"./index-a1485a9d.js";function h({onImageSelect:o,clicked:f,setClicked:c}){const[l,r]=s.useState(!1),n=s.useRef(null),a=function(e){e.preventDefault(),e.stopPropagation(),e.type==="dragenter"||e.type==="dragover"?r(!0):e.type==="dragleave"&&r(!1)},i=e=>{o(e[0])},p=function(e){e.preventDefault(),e.stopPropagation(),r(!1),e.dataTransfer.files&&e.dataTransfer.files[0]&&i(e.dataTransfer.files)},d=function(e){e.preventDefault(),e.target.files&&e.target.files[0]&&i(e.target.files)},u=()=>{n.current.click()};return g.useEffect(()=>{f&&n.current.click(),c(!1)},[]),t.jsxs("div",{id:"form-file-upload",className:" h-56",onDragEnter:a,children:[t.jsx("input",{ref:n,type:"file",id:"input-file-upload",multiple:!1,onChange:d,accept:"image/*"}),t.jsx("label",{id:"label-file-upload",htmlFor:"input-file-upload",className:l?"drag-active":"",children:t.jsxs("div",{children:[t.jsx("p",{children:"Drag and drop your profile picture or"}),t.jsx("button",{className:"upload-button",onClick:u,type:"button",children:"Upload a file"})]})}),l&&t.jsx("div",{id:"drag-file-element",onDragEnter:a,onDragLeave:a,onDragOver:a,onDrop:p})]})}export{h as D};
