import React from "react";
import Entry from "./Entry";
import emojipedia from "../emojipedia";

function createEmojiCard(emojiCard){
  return <Entry 
    key={emojiCard.id}
    emoji={emojiCard.emoji}
    name={emojiCard.name}
    definition={emojiCard.meaning}
  />
}



function App(){
    return(<div>
        <h1>
          <span>emojipedia</span>
        </h1>
  
        <dl className="dictionary">
          
        {emojipedia.map(createEmojiCard)}


        </dl>
      </div>);
}


export default App;