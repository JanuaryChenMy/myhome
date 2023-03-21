import React from 'react'
import { useMatches } from "react-router-dom";
function Breadcrumbs() {
  let matches = useMatches();
  // type  r3r3= typeof matches
  let crumbs = matches.map((match) =>
    (match.handle as { crumb: (data: any) => number })?.crumb(match.data)
  );
    // .filter((match) => Boolean(match.handle?.crumb))
    console.log("⚠检测 ~ crumbs:", crumbs)
    
    // first get rid of any matches that don't have handle and crumb
  //   // now map them into an array of elements, passing the loader
  //   // data to each one

  // return (
  //   <ol>
  //     {crumbs.map((crumb, index) => (
  //       <li key={index}>{crumb}</li>
  //     ))}
  //   </ol>
  // );
}
export default function home() {
  Breadcrumbs()
  return (
    <div>home</div>
  )
}