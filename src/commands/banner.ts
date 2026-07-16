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
//   banner.push("<br><br>");
//   banner.push("software solutions 4 u!");
//   banner.push("mainly MIDI-related (so maybe not 4 u at all)");
//   banner.push("<br>");
//   banner.push("use the \"shell\" below to navigate the website");
//   banner.push("type <span class='command'>about</span> for a bit of a blurb");
//   banner.push("type <span class='command'>projects</span> to view the the current software offerings");
//   banner.push("type <span class='command'>help</span> for a list of other commands");
//   banner.push("<br><br>");
  return banner;
}

export const BANNER = createBanner();
