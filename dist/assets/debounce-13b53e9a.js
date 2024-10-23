const u=(o,c)=>{let e;const t=(...n)=>{e&&clearTimeout(e),e=setTimeout(()=>{o(...n)},c)};return t.cancel=()=>{e&&clearTimeout(e)},t};export{u as d};
