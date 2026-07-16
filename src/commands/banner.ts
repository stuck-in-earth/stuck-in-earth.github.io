import command from '../../config.json' with {type: 'json'};

const createBanner = () : string[] => {
  const banner : string[] = [];
  banner.push("<br>")
  command.ascii.forEach((ele) => {
    let bannerString = "";
    //this is for the ascii art
    for (let i = 0; i < ele.length; i++) {
      if (ele[i] === " ") {
        bannerString += "&nbsp;";
      } else {
        bannerString += ele[i];
      }
    }
    
    let eleToPush = `<pre>${bannerString}</pre>`;
    banner.push(eleToPush);
  });
  
/*    
    command.bannerText.forEach((line) => {
     //let bannerSubstring = "";
     for (let i = 0; i < line.length; i++) {
       if (line[i] === " ") {
         //bannerSubstring += "&nbsp;";
         banner.push("&nbsp;");
       } else {
         //bannerSubstring += line[i];
         banner.push(line[i]);
       }
     }
     
     //let subToPush = `<pre>${bannerSubstring}</pre>`;
     //banner.push(subToPush);
   }); 
*/
  
    banner.push("<br><br>");
    banner.push("software solutions 4 u!");
    banner.push("mainly MIDI-related (so maybe not 4 u at all)");
    banner.push("and it might be a website for a software developer, but don't judge on the website, it's just a bit o' fun")
    banner.push("<br>");
    banner.push("use the \"shell\" below to navigate the website (or be boring and use the mouse - if you dare...)");
    banner.push("type <span class='command'>help</span> for a list of available commands");
    banner.push(`type <span class='command'>repo</span> to view the GitHub repository or click <a href='${command.repoLink}' target='_blank'>here</a>.`);
    banner.push("<br><br>");
  return banner;
}

export const BANNER = createBanner();
