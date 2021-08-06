

import { useState } from 'react';
const Meme=({meme,setMeme})=>{

    const [form,setForm]=useState({
        template_id:meme.id,
        username:"Noobhere",
        password:"QazWsx123",
        boxes:[]
 
     })

     const generateMeme=()=>{
         console.log("Meme Generating");
         let url=`https://api.imgflip.com/caption_image?template_id=${form.template_id}&username=${form.username}&password=${form.password}`
         console.log(url);


         form.boxes.map((box,index)=>{
            url+=`&boxes[${index}][text]=${box.text}`;
          });

          fetch(url)
          .then((res)=>res.json())
          .then((data)=>{
              setMeme({...meme,url:data.data.url})
          })


     }
    return <div className="meme">
        <img src={meme.url} alt="meme" />
        
        <div>
            {
                [...Array(meme.box_count)].map((_,index)=>{
                    return <input type="text" key={index}  placeholder={`meme Caption ${index+1}`} 
                        onChange={(e)=>{
                           const newBoxes=form.boxes;
                           newBoxes[index]={text:e.target.value}
                           setForm({...form,boxes:newBoxes})
                        }}
                    />
                 })}
         </div>  
        <button onClick={generateMeme}>Create Meme</button>
        <button onClick={()=> setMeme(null)}>Choose Templates</button>
    </div>;
}

export default Meme