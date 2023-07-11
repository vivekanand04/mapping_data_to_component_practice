//question:  diye gaye starting file me kuchh aisa change kar do ki agar ham emojipidea me ek aur emoji add kar de wo automatic print ho jaye

//how t solve
//1. yaha tin emoji ka code hai and tino ka code ek jaisa hai ,so yaha se ek ko sut karke entry.jsx file banakar dal do and baki do ko delete kar do
//2. ab chupchap mapping ka use karo ,iske just pichhla video me hi padha hai

//ye to maping kiya hai
import React from "react";
import emojipedia from "../emojipedia.js";
import Span from "../Span";

function createEntry(emojipidea) {
  return (
    <Span
      emoji={emojipidea.emoji}
      name={emojipidea.name}
      meaning={emojipidea.meaning}
    />
  );
}
function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      <dl className="dictionary">
        {emojipedia.map(createEntry)} {/* //mapping ka istemal */}
      </dl>
    </div>
  );
}

export default App;
