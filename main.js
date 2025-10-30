// Data structure for modal content
const DATA = {
  main1: {
    title: "Overview",
    subtopics: [
      {
        title: "Training Outline",
        type: "slideshow",
        slides: [`<br><span class="hinttitle">PART 1: OVERVIEW OF AQUES ACCOUNT</span><br><br>
	<span class="bold">• Rules and Regulations and Limitations<br>
	• Basic Troubleshooting Techniques<br>
	• Technical Check</span><br><br>
<span class="hinttitle">PART 2: LESSON FLOW</span><br><br>
<span class="hinttitle">PART 3: EXECUTION OF MATERIALS</span><br><br><br>`,
      ]
      },
      {
        title: "Criteria",
        type: "slideshow",
        slides: [`<br><span class="hinttitle">CRITERIA for the MOCK LESSON:</span><br><br>
	<span class="bold"><b>50% Overall Flow of the Lesson</b> - Assesses the supporter's command of the lesson flow, use of materials, and smooth progression throughout the session.<br><br>
  <b>50% Overall Performance and Skills</b> - Evaluates communication and conversational ability, teaching style, pronunciation, technical aspect, and comprehension skills.<br><br><br>`,
      ]
      },
      {
        title: "AQUES Lesson Overview",
        type: "slideshow",
        slides: [`<br><span class="hinttitle">AQUES - Acquire English Skills</span><br><br>
	<span class="bold">• <b>SKILLS:</b> pronunciation, translation, conversation
<br><br>
	• <b>AGE GROUP:</b> 18–75 years old<br><br>
  • <b>AQUES STUDENTS:</b> students, professionals, entrepreneurs<br><br>
  • <b>FEE STRUCTURE:</b> per 25 minutes<br><br>
	• <b>DURATION:</b> 50, 75, 100, 125, 150, or 200 minutes</span><br><br><br><br><br>`,
      ]
      }
    ]
  },
  main2: {
    title: "Part 1",
    subtopics: [
      {
        title: "Rules & Regulations",
        type: "presentation",
        linkType: "pdf",
      description: `<span style='font-size:1.3em; font-weight:bold;'>View the full spreadsheet here.</span>`,
            link: "https://onedrive.live.com/?redeem=aHR0cHM6Ly8xZHJ2Lm1zL2IvYy9mOWU2OGRlMzIwMTExYmFkL0VYczhUWk51dzN4SHFSazVRVU9uUDdRQnRxN1FFdWRnWVBRSy11YWdOb0VtRnc&cid=F9E68DE320111BAD&id=F9E68DE320111BAD%21s934d3c7bc36e477ca919394143a73fb4&parId=F9E68DE320111BAD%21sc4653b6843a84f66ab68525e22193750&o=OneUp"
    },
      {
        title: "Basic Troubleshooting",
        type: "slideshow",
        slides: [`<br><span class="hinttitle">5-minute Rule</span><br><br>
	<span class="bold">• If a supporter has technical issues or delays, the supporter <em><mark>must contact the support team immediately.</mark></em><br><br>
  • The supporter has 5 minutes to resolve the issue with support team's help. Otherwise, another supporter will take over.<br><br><br>`,
  `<br><span class="hinttitle">How does the 5-minute rule apply in an applicant’s mock demo?</span><br><br>
	<span class="bold">• If any technical issue or delay on the supporter’s end during the mock demo cannot be resolved within five (5) minutes, <em><mark>the mock demo must be rescheduled.</mark></em><br><br>
  • Before receiving a new schedule, the supporter <em><mark>must fix the issue and undergo a technical check by TQA</mark></em> to ensure everything is functioning properly.<br><br><br>`,
  `<br><span class="hinttitle">SUPPORTER IS LATE | HAS DELAYS OR DISRUPTIONS </span><br><br>
	<span class="bold">• If you’re late or encounter issues during the lesson, <em><mark>you must offer and ask the student about a possible extension.</mark></em><br><br>

  <div class="indented-block" role="group" aria-label="Extension responses" style="margin-left:1rem;border-left:3px solid #eee;padding-left:1rem;">
    <div class="resp" style="margin:.5rem 0">
      <div class="resp-title" style="font-weight:700;margin-top:.25rem">【If the student agrees to the extension】</div>
      <div>"Thank you very much for your understanding. Okay, then we are going to extend our lesson by __ minutes today."</div><br>
    </div>

    <div class="resp" style="margin:.5rem 0">
      <div class="resp-title" style="font-weight:700;margin-top:.25rem">【If the student says, “no”】</div>
      <div>"Okay, I understand. Again, I am very sorry for the inconvenience, but you can still extend your lesson another time, so please tell your Japanese concierge that you couldn't extend your lesson this time. Your concierge should be able to help you with that."</div>
    </div>
  </div><br>

  • Extensions are allowed <em><mark>ONLY</mark></em> if the delay is on your end and the student agrees.<br><br><br>`,
  `<br><span class="hinttitle">STUDENT IS LATE </span><br><br>
	<span class="bold">• <em><mark>Never extend</mark></em> the lesson if the student is late.<br><br><br>`,
  `<br><span class="hinttitle">MS TEAMS ISSUES</span><br><br>
	<span class="bold">•  If the lesson cannot start due to a Microsoft Teams issue, <em><mark>report it to the support team immediately. </mark></em><br><br>
  •  For any technical concerns, please contact the Reagent Training Team through their MS Teams account.</em><br><br><br>`,
  `<br><span class="hinttitle">MS TEAMS SCREEN SHARING</span><br><br>
	<span class="bold">•  If you encounter screen-sharing issues, <em><mark>re-share your screen.</mark></em><br><br>
  •  Avoid dead air, keep the student engaged while you're resolving the issue.</span><br><br><br>`,
      ]
      },
      {
        title: "Technical Check",
        type: "slideshow",
        slides: [`<br><span class="hinttitle">Do a Technical Check regularly prior to your shift.</span><br><br>
	<span class="bold">1. MS Teams check<br><br>
  2. Background wall check<br><br>3. Lighting check
<br><br><br>`,
  `<br><span class="hinttitle">1. MS Teams check:</span><br><br>
	<span class="bold">a. Camera settings<br><br>
  b. Audio settings<br><br>c. Camera test using "Meet now" in MS calendar<br><br>d. Test audio and video via the "Echo / Sound Test Service"<br><br><br> `,


  `<br><span class="hinttitle">1. MS Teams check (Camera Settings). </span><br><br>
	<span class="bold">• Use a high-definition camera.
<br><br>
<div class="img-row-ms-teams" role="group" aria-label="example images"> <button class="enlargeable-img-btn" data-img-src="https://res.cloudinary.com/dvlwxkj7y/image/upload/v1756602301/Camset_aetkad.png"> 📷 Click image to view </button> <button class="enlargeable-img-btn" data-img-src="https://res.cloudinary.com/dvlwxkj7y/image/upload/v1760994065/webver1_qcvuv4.png"> 📷 Click image to view </button> </div><br>

  <span class="bold"><b>NOTE:</b> Supporters are not allowed to use virtual backgrounds.<br><br>
  <button class="enlargeable-img-btn"
  data-img-src="https://res.cloudinary.com/dvlwxkj7y/image/upload/v1756597742/camerasettings1_kugdux.png">
  📷 Click image to view
</button><br><br>`,

  `<br><span class="hinttitle">1. MS Teams check (Audio Settings)</span><br><br>
  <span class="bold">•  Use a noise-canceling headset with an external microphone.<br><br>
  <span class="bold">• Select your headset’s brand for both mic and speakers. <br><br>
  <span class="bold">•  You may use Microsoft Teams’ built-in noise suppression. <br><br>
  <span class="bold">•  Third-party noise-cancellation apps are not allowed. <br><br>
 <div class="img-row-ms-teams" role="group" aria-label="example images"> <button class="enlargeable-img-btn" data-img-src="https://res.cloudinary.com/dvlwxkj7y/image/upload/v1756602301/Camset_aetkad.png"> 📷 Click image to view </button> <button class="enlargeable-img-btn" data-img-src="https://res.cloudinary.com/dvlwxkj7y/image/upload/v1760994065/webver1_qcvuv4.png"> 📷 Click image to view </button> </div><br>`,

  `<br><span class="hinttitle">1. MS Teams check (c. Camera test using "Meet now" in MS calendar)</span><br><br>
	<span class="hinttitle">For Desktop (Windows/Mac)<br><br></span>
  <span class="bold">1. Open Microsoft Teams (desktop app or browser).<br><br>
  <span class="bold">2. In the left sidebar, click Calendar.<br><br>
  <span class="bold">3. Click Meet Now at the top-right corner.<br><br>
  <span class="bold">4. A meeting setup window will appear. Click Start meeting.<br><br>
  <button class="enlargeable-img-btn"
  data-img-src="https://res.cloudinary.com/dvlwxkj7y/image/upload/v1756596024/videosettings_lvaksv.png">
  📷 Click image to view
</button><br><br>
<b>NOTE:</b> You can leave the meeting anytime. No one else will join unless invited, so <mark><em>it's safe for testing.</em></mark><br><br>`,

  `<br><span class="hinttitle">1. MS Teams check (d. Test audio and video via the "Echo / Sound Test Service")</span><br><br>
  <span class="bold">1. Search for "Echo / Sound Test Service" on Microsoft Teams.<br><br>
  
   <button class="enlargeable-img-btn"
  data-img-src="https://res.cloudinary.com/dvlwxkj7y/image/upload/v1761043394/Echo_mmr4be.png">
  📷 Click image to view</button><br><br>

  <span class="bold">2. Select "Video Call."<br><br>

   <button class="enlargeable-img-btn"
  data-img-src="https://res.cloudinary.com/dvlwxkj7y/image/upload/v1761043473/echo1_vbymzb.png">
  📷 Click image to view</button><br><br>

  <span class="bold">3. Follow the voice prompt to check your audio and video.<br><br>
  
  <button class="enlargeable-img-btn"
  data-img-src="https://res.cloudinary.com/dvlwxkj7y/image/upload/v1761043549/echo2_vhzp37.png">
  📷 Click image to view</button><br><br>`,

  `<br><span class="hinttitle">2. Background Wall check</span><br><br>
	<span class="bold">• Blurry and visual background is not allowed.<br><br>
  • A plain, light-colored background is required.
<br><br>
• Dark colors are not allowed.<br><br><br>`,

`<br><span class="hinttitle">3. Lighting check</span><br><br>
	<span class="bold">• Your face must be clearly visible and well-lit.<br><br>
  • Ensure that your light source is in front of you, not behind, to prevent shadows or backlighting.
<br><br><br>`,
      ]
      },
    ]
  },
  main3: {
    title: "Lesson Flow",
    subtopics: [
      {
        title: "Prior to the lesson",
        type: "slideshow",
      slides: [
        `<br><div>
     <div><strong class="bold">1. Prepare the needed materials at least 30-10 minutes beforehand.</div><br>
     Material Preparation: </strong><br><br>
     <a href="https://docs.google.com/spreadsheets/d/1p3HKc6yuBI8TVhDEDnREc0Y3Lcjrf81iDN-jSLnv35c/edit?gid=156011472#gid=156011472"
   target="_blank"
   class="presentation-link view-lesson-btn">
  <span class="link-icon" aria-hidden>📄</span> View the Lesson Plan Link
</a><br><br>
     <iframe 
    src="https://drive.google.com/file/d/1FUtTGkdDQCIdeuLbd8G_aJw9oEei_kSP/preview" 
    width="100%" 
    height="400" 
    allowfullscreen
    allow="autoplay">
  </iframe><br><br><br>
   </div>`,

    `<br><div>
     <div><strong class="bold">2. Send a direct message to the student via their MS Teams ID on the lesson plan 10 minutes before lesson.</strong></div><br><br>
     <span class="bold">Good day! This is 🌟supporter's name🌟. We have a lesson today, (date) at (schedule). I will call you in 10 minutes. I'm looking forward to our lesson!<br><br>

If a problem occurs during the lesson or before it starts, please contact the chat group of the AQUES Philippines office. Thank you.</span><br>
    
     <br><br>
    <button class="enlargeable-img-btn"
  data-img-src="https://res.cloudinary.com/dvlwxkj7y/image/upload/v1756606988/simplemessage_fevuli.png">
  📷 Click image to view
</button><br><br>
   </div>`,

   `<br><div>
     <div><strong class="bold">3. At the scheduled lesson time, please send the message <em><mark>"Calling now"</mark></em> before starting the call.</strong></div><br>
    
     <br>
  <button class="enlargeable-img-btn"
  data-img-src="https://res.cloudinary.com/dvlwxkj7y/image/upload/v1756608103/callingnow_jnjsu7.png">
  📷 Click image to view
</button><br><br>
   </div>`
      ]
    },
    {
        title: "During the lesson",
        type: "slideshow",
      slides: [
        `<br><span class="hinttitle">A. INTRODUCTORY PART</span><br><br>
	<span class="bold">1. Technical check<br><br>
  2. Introduction<br><br>3. Share the Screen
<br><br><br>`,
  `<br><span class="hinttitle">1. Technical check</span><br><br>
	<span class="bold">Ask these questions at the beginning of the call before starting the lesson.<br><br>
  • "Can you see me?"<br>
  • "Can you hear me?"<br>
  • "Is my talking speed okay?"<br>
  <br><br> `,

  `<br><span class="hinttitle">2. Introduction</span><br><br>
	<span class="bold">• Enthusiastically greet the student<br><br>
  • Introduce yourself and ask the student’s preferred name.<br><br>
  • Ask some random questions like: "How are you today?"<br>
  <br><br> `,

    `<br><span class="hinttitle">3. Share the Screen</span></div><br><br>
     <span class="bold">• Select the screen sharing button on MS Teams.<br><br>
  • Then select the screen/window you want to share to the student.<br><br>
  <b>SAY:</b> "Let me share to you my screen. Can you see it now?"<br>
  <br><br> `,

    `<br><div>
     <div><strong class="bold">Introduction, Technical check, Share the screen</div>
    </strong><br><br>
     <iframe 
    src="https://drive.google.com/file/d/17IyZ2mjIlPCR5zyswjF25FnuA0SCGUgB/preview" 
    width="100%" 
    height="400" 
    allowfullscreen
    allow="autoplay">
  </iframe><br><br><br>
   </div>`,

   `<br><div>
     <div><strong class="bold">How to share screen using MS Teams App </div>
    </strong><br><br>
     <iframe 
    src="https://drive.google.com/file/d/1XyXa_MtmSYFQxuVJ2lLPbxTSFVm5deJM/preview" 
    width="100%" 
    height="400" 
    allowfullscreen
    allow="autoplay">
  </iframe><br><br><br>
   </div>`,

   `<br><div>
     <div><strong class="bold">How to share screen using MS Teams Web version</div>
    </strong><br><br>
     <iframe 
    src="https://drive.google.com/file/d/1AaeKD0Er2-RmHFzBvl7FDVmFR9SqT0Lu/preview" 
    width="100%" 
    height="400" 
    allowfullscreen
    allow="autoplay">
  </iframe><br><br><br>
   </div>`,

`<br><span class="hinttitle">B. LESSON PROPER</span><br><br>
	<span class="bold">4. Pronunciation Practice<br><br>
  5. Translation Exercises<br><br>6. ACP Foundations<br><br>
• Before starting the next exercise, <br>
<b>SAY:</b> "Before we proceed to the next exercise, do you have any questions?"
<br><br><br>`,

`<span class="hinttitle">C. LESSON CONCLUSION</span><br><br>
	<span class="bold">7. Wrap-Up (Extend 1 minute more)<br><br>
<b>a.</b> Apology - "I’m sorry time is up.”<br>
<b>b.</b>  Appreciation - “Thank you for your time today.”<br>
<b>c.</b>  State your name - "Once again, I am Supporter Mandy."<br>
<b>d.</b>  Mention the performance feedback link<br>
<b>e.</b>  Say goodbye<br><br>
<iframe 
    src="https://drive.google.com/file/d/18Io-AIfTh5_NxZxfi3hXP3coGsON0Lem/preview" 
    width="100%" 
    height="400" 
    allowfullscreen
    allow="autoplay">
  </iframe>
<br><br><br>`,
      ]
    },
    {
        title: "After the lesson",
        type: "slideshow",
      slides: [
        `<br><div>
     <div><strong class="bold">1. Send a simple message together with the feedback link to the Skype group. </strong></div><br>
     <span class="bold"><b>Example:</b> The lesson has finished. Thank you for today! If you have time, kindly answer the performance feedback link. <br><br>
     
    <b>Feedback Link:</b>

https://docs.google.com/forms/d/e/1FAIpQLScsAiiTV_bdBIEcy7bwd0GZ45-0Kw2tiuiGemmwn-c_NE8xxw/viewform

</span><br><br><br>
     <button class="enlargeable-img-btn"
  data-img-src="https://res.cloudinary.com/dvlwxkj7y/image/upload/v1756610840/lastmessage_uzng8p.png">
  📷 Click image to view
</button><br><br><br>`,
      ]
    },
    {
        title: "Lesson Breakdown",
        type: "slideshow",
      slides: [
        `<br><span class="hinttitle">Mock Demo Lesson Breakdown</span><br><br>
	<span class="bold">• <b>3:00 PM:</b> Call the student, Do a technical check, Introduction, Share the screen in less than a minute, then Start Pronunciation.<br><br>
   • <b>3:15 PM:</b> end ACP and start with the Wrap-up<br><br>• <b>3:16:</b> end the call 
<br><br><br>`,
      ]
    },
  ]
},
  pronunciation: {
    title: "Pronunciation",
    subtopics: [
      {
        title: "Pronunciation Rule",
        type: "video",
        text: "<span style='font-size:1.3em; font-weight:bold;'>If the student mispronounces a word, <em><mark>have them listen and repeat it 2–4 times</mark></em>.</span>",
        videoUrl: "https://drive.google.com/file/d/131pmCK-GpjnOIktf2QRa43ZmnJP82hMU/preview"
      },
      {
        title: "Pronunciation Practices",
        type: "presentation",
        description: "<span style='font-size:1.3em; font-weight:bold;'>View the pronunciation presentation.</span>",
        link: "https://docs.google.com/presentation/d/1hr524J9u2GqSUtBKOyMVnJ1lme8m1CfTfVlag5NqhQ0/edit?slide=id.g87739892cb_5_0#slide=id.g87739892cb_5_0"
      },
      {
        title: "Pronunciation Videos",
        type: "video-group",
        description: "<span style='font-size:1.3em; font-weight:bold;'>Select a video below to watch.</span>",
        videos: [
          {
  title: "Japanese Instructions",
  url: "https://drive.google.com/file/d/1uskMAJLJ-jbNJ13T0TD5mhnM4vv5qFXT/preview",
  thumbnail: "https://res.cloudinary.com/dvlwxkj7y/image/upload/v1761132383/jap_ins_j1yjxk.png",
  source: "drive"
},
          {
            title: "Consonant Sounds",
            url: "https://drive.google.com/file/d/1GUBfaro2Pzw3Sp1cTFxBuWvu8Q4l0-mx/preview",
          thumbnail: "https://res.cloudinary.com/dvlwxkj7y/image/upload/v1761044598/consonant_tokoid.png",
  source: "drive"
},
          {
            title: "Single Sound Practice",
            url: "https://drive.google.com/file/d/1HX2g2-X7oLCSByMGER4U8pm8GD086dVH/preview",
          thumbnail: "https://res.cloudinary.com/dvlwxkj7y/image/upload/v1761132471/single_sound_xmjkja.png",
  source: "drive"
},
          {
            title: "Pair Sound Practice",
            url: "https://drive.google.com/file/d/1pXLi2_IvuZDeidohGMO-o-65hipZooPJ/preview",
          thumbnail: "https://res.cloudinary.com/dvlwxkj7y/image/upload/v1761132635/Pair_sqckps.png",
  source: "drive"
},
          {
            title: "Linking Sounds",
            url: "https://drive.google.com/file/d/1cgeNeguoIOrFP3EoDxlpDzYEOeleobiW/preview",
          thumbnail: "https://res.cloudinary.com/dvlwxkj7y/image/upload/v1761132700/link_kytt3m.png",
  source: "drive"
},
          {
            title: "Dropping Sounds",
            url: "https://drive.google.com/file/d/1pw_cyerOk2Ko_JEtHw5HGo4TjiFt340k/preview",
          thumbnail: "https://res.cloudinary.com/dvlwxkj7y/image/upload/v1761132795/drop_vo3vkp.png",
  source: "drive"
},
          {
            title: "Sound Changes",
            url: "https://drive.google.com/file/d/17bYBjcTd6bPWrJUtuuTlGxm2LM3DmIQY/preview",
          thumbnail: "https://res.cloudinary.com/dvlwxkj7y/image/upload/v1761132838/change_jzfkc3.png",
  source: "drive"
},
          {
            title: "Intonation",
            url: "https://drive.google.com/file/d/1LX2iXEoBi5FbH2o-r6aFA8QVdTBYLsQe/preview",
          thumbnail: "https://res.cloudinary.com/dvlwxkj7y/image/upload/v1761132894/into_gkzicu.png",
  source: "drive"
},
          {
            title: "Dictation Pile-up",
            url: "https://drive.google.com/file/d/1H1ETITj5p9rukvAEoFcu2B64Dt59wN-f/preview",
          thumbnail: "https://res.cloudinary.com/dvlwxkj7y/image/upload/v1761132967/dictation_tqdydq.png",
  source: "drive"
},
          {
            title: "Dictation Pile-up Review",
            url: "https://drive.google.com/file/d/19F4Lm0LMFqvawzT4YV6ksc03uMnPE5Ll/preview",
          thumbnail: "https://res.cloudinary.com/dvlwxkj7y/image/upload/v1761133025/dic_pile-up_xfh9ti.png",
  source: "drive"
}
        ]
      }
    ]
  },
  translation: {
    title: "Translation",
    subtopics: [
      {
        title: "Translation Rules",
        type: "slideshow",
        slides: [
          `<span class="hinttitle"><b>1. Pronunciation Rules:</span></b><br><br><span class="bold">• If the student mispronounces a word, <em><mark><b>have them repeat it 2–4 times.</b></mark></em></span><br><br>
    <span class="bold"><b>Example:</b><br><br>
    Answer key: I like to eat salad. <br>
    Student: I like to eat <b>salaDA.</b><br><br>
    Supporter: <b>Very good. Your translation is correct. But let's practice this word. Please repeat after me: <i>SALAD</i></b><br><br>
    (the student repeats)<br><br>
    Supporter: <b>Good! Let's try one more time: <i>SALAD</i></b></span><br><br><br>`,
    
    `<span class="hinttitle"><b>1. Pronunciation Rules: Sample Video</span></b><br><br><span class="bold">
    <iframe src="https://drive.google.com/file/d/1YpKjaTUOW7Q2XW7vgOuEqHMqp8UdY1NM/preview" width="100%" height="400" allowfullscreen allow="autoplay"></iframe><br><br>`,
    
          `<span class="hinttitle"><b>2. Compliments:</span></b><br><br> <span class="bold"><b>Avoid saying "No," "Your answer is wrong," or "That is incorrect."</b><br><br>
          • Choose positive and encouraging words.<br><br>
          • Include a variety of simple compliments.</span><br><br><br>`,
          `<span class="hinttitle"><b>3. Questions about Grammar Terms:</span></b><br><br>
          <span class="bold"><b>IF you know the answer:</b><br>
         • Explain a couple of times. If still unclear, refer to Japanese Management.<br><br>
          <b>IF unsure:</b><br>
      • Be honest and say you’ll research and follow up after the lesson or next meeting.</span><br><br><br>`,
      `<span class="hinttitle"><b>4. Contraction:</span></b><br><br>
      	<span class="bold">• Accept both contracted and non-contracted forms as correct.</span><br>
        
        <div class="img-row-ms-teams" role="group" aria-label="example images"> <button class="enlargeable-img-btn" data-img-src="https://res.cloudinary.com/dvlwxkj7y/image/upload/v1761282863/contract_d1vsx7.png"> Contraction </button> 

 <div class="img-row-ms-teams" role="group" aria-label="example images"> <button class="enlargeable-img-btn" data-img-src="https://res.cloudinary.com/dvlwxkj7y/image/upload/v1761283032/contract_2_moodj8.png"> Contraction: Mulitple Possible Answers </button> 


  <div class="img-row-ms-teams" role="group" aria-label="example images"> <button class="enlargeable-img-btn" data-img-src="https://res.cloudinary.com/dvlwxkj7y/image/upload/v1761283095/Contract_3_ve0xda.png"> Contraction: Slash & Parenthesis </button><br><br><br>`,
        ]
      },
      {
        title: "Grammar Rules",
        type: "slideshow",
        slides: [
          `<span class="hinttitle">• These aren’t traditional English grammar rules. <br>• These are AQUES guidelines for handling student errors in sentence translations.</span></b><br><br>
          
          <br><span class="bold">1. Address one mistake at a time. Give three attempts per mistake.<br><br>
          2. Consider the student's first translation the first attempt.<br><br>
          3. Give hints after every incorrect attempt, and always start each hint with a Heads-up.<br><br>
          <b>NOTE:</b><br><br>
          • After the third attempt, provide the answer or the missing word.<br><br>
          • Encourage 1 to 2 sentence repetition after the correct translation.</span><br><br><br>`,
        ]
      },
      {
  title: "Giving Hints",
  type: "lesson-grid",
  lessons: [
    {
  title: "What are hints for?",
  slides: [
    `<br><p class="hint"> <span class="hinttitle">What are hints for?</span><br>
                <span class="smallertitle">• We provide hints in order to help students get the correct
                    translation.</span>
            </p>

            <p class="hint"><span class="bold"><b>Example:</b><br>Japanese display:
                また会えて良かったです。<br><br>
                    Answer key: <br>Good to see you again!<br></span> 
            </p><br><br>`,

            `<br><p class="hint"><strong class="bold">Answer key: </strong> <span class="smallertitle">Good to see you
                    again!</span><br><br><strong class="bold">Student's answer:</strong> <span class="smallertitle"><em><mark>Nice</mark></em>
                    to see you
                    again!</span><br><br>
            </p><br><br>`,

            `<br><p class="hint"><strong class="bold">Answer key:</strong><span class="smallertitle"> Good to see you
                    again!</span><br><strong class="bold">Student's answer: </strong><span class="smallertitle"><em><mark>Nice</mark></em> to see
                    you
                    again!</span><br><br><br> <strong class="bold">HINT:</strong><span class="smallertitle"> Very close! Please
                    change 'Nice' to another word that
                    starts with the letter 'G'.</span><br><br><br>
            </p>`,
  ]
},
    {
      title: "The Pattern",
      slides: [ `<br><br><p class="hint"><span class="hinttitle">The pattern when giving hints:</span><br><br><span
                    class="heads">Heads-up</span> + <span class="instruct">Instructions</span> +
                <span class="clue">Hints</span><br><br><br><br>`,
            `</p>
            <p class="hint"><span class="hinttitle">Heads-up:</span><br><br><span class="smallertitle"> • Very close!
                    <br>• Nice try! <br>• Good try!
                    <br>• Almost there! <br>• Almost perfect! <br><br><br></span>
            </p>`,
            `<p class="hint"><span class="hinttitle">Instructions:</span>
                <br><br><span class="smallertitle"> "Please"<br><br>+<br><br>• Change<br>• Choose<br>• Add<br>• Remove<br>• Make<br>• Put<br><br><br></span>`,
                `<br><p class="hint"><span class="hinttitle">The pattern when giving hints:</span><br><br><span
                    class="heads">_____</span> + <span class="instruct">_____</span> +
                <span class="clue">_____</span><br><br><br>
            </p>`,

            `<br><p class="hint"><span class="hinttitle">The pattern when giving hints:</span><br><br><span
                    class="heads">Heads-up</span> + <span class="instruct">Instructions</span> +
                <span class="clue">Hints</span><br><br><br>
            </p>`,        

        ]
    },
    {
      title: "Missing 2-letter words",
      slides: [
  `<br><div>
     <div><br><strong class="bold">2-letter word + grammar term</strong></div><br><br>
     <iframe 
    src="https://drive.google.com/file/d/1MD_dlRSkHAcL6mUTOXuxriwmtMju70I1/preview" 
    width="100%" 
    height="400" 
    allowfullscreen
    allow="autoplay">
  </iframe><br><br><br>
   </div>`,
  `<br><div>
     <div><br><strong class="bold">Give Choices</strong></div><br>
     <div class="bold">• All three choices are two-letter words.<br><br>• We <em><mark>ONLY</mark></em> give choices for two-letter words.<br><br></div>
     <iframe 
    src="https://drive.google.com/file/d/1bJeBfdaoNGLyKWBHqdljkkcfjXBTU1x2/preview" 
    width="100%" 
    height="400" 
    allowfullscreen
    allow="autoplay">
  </iframe><br><br><br>
   </div>`,
  `<br><div>
     <div><br><strong class="bold">Give Choices</strong></div><br>
     <div class="bold">• If the student’s first answer is wrong, give the remaining two choices.<br><br>• If the student still selects the wrong answer from the remaining two choices, reveal the correct option.<br><br></div>
     <iframe 
    src="https://drive.google.com/file/d/1Hfi0Dv437HMVF23fpPEfP2_tBlq_jQGb/preview" 
    width="100%" 
    height="400" 
    allowfullscreen
    allow="autoplay">
  </iframe><br><br><br>
   </div>`,

    `<br><div>
     <div><br><strong class="bold">Give Choices</strong></div><br>
     <div class="bold">• You can also give choices for Articles (a, an, the)<br><br></div>
     <iframe 
    src="https://drive.google.com/file/d/1vZAuxPg1RJl3HMbKvvrdL-XVW5wJHjYi/preview" 
    width="100%" 
    height="400" 
    allowfullscreen
    allow="autoplay">
  </iframe><br><br><br>
   </div>`,

   `<br><p class="hint"><span class="hinttitle">Note: Give three Choices.</span><br><br><span class="bold">answer key: I'll go to
                    the airport in the evening.<br>student: I'll go to the airport <em><mark>by</mark></em> the
                        evening.</span><br><br><br><span class="hinttitle">HINT: ???</span><br><br><br> `,
]
    },
    {
      title: "Missing 2-letter word (contracted)",
      slides: [
  `<br><div>
     <div><br><strong class="bold">Separate the contracted words first and then give hints.</strong></div><br><br>
     <iframe 
    src="https://drive.google.com/file/d/1F9V7raSWleUwrqkmjItOugPC_lglW-fd/preview" 
    width="100%" 
    height="400" 
    allowfullscreen
    allow="autoplay">
  </iframe><br><br><br>
   </div>`,
   `<br><p class="hint"><span class="hinttitle">Note: Give a proper hint.</span><br><br><span class="bold">answer key: I’m learning English.<br>student: I <em><mark>will</mark></em> learning English.</span><br><br><br><span class="hinttitle">HINT: ???</span><br><br><br> `,
      ]
    },
    {
      title: "Missing 3-letter words",
      slides: [
  `<br><div>
     <div><br><strong class="bold">Give the first letter + number of letters</strong></div><br><br>
     <iframe 
    src="https://drive.google.com/file/d/12jUCAE5Th8EHWYDhj9g65ejbBODAjO5I/preview" 
    width="100%" 
    height="400" 
    allowfullscreen
    allow="autoplay">
  </iframe><br><br><br>
   </div>`,
   `<br><p class="hint"><span class="hinttitle">Note: Give the
                first letter + number of letters. </span><br><br><span class="bold">answer key: Are there any direct flights?<br>student: Are there <em><mark>some</mark?></em>
                    direct flights?</span><br><br><br><span class="hinttitle">HINT: ???</span><br><br><br> `,
]
    },
    {
      title: "Missing 4-letter words or more",
      slides: [`<br><div><br><strong class="bold">Give the first letter + number of letters</strong></div><br><br>
     <iframe 
    src="https://drive.google.com/file/d/18sVjzbQcMZoNkFAOVYCIYkHOhlwUkb9P/preview" 
    width="100%" 
    height="400" 
    allowfullscreen
    allow="autoplay">
  </iframe><br><br><br>
   </div>`,
   `<br><div>
     <div><br><strong class="bold">Give the first and last letters + number of letters</strong></div><br><br>
     <iframe 
    src="https://drive.google.com/file/d/1cjqM03CFnWsQl02p2AFHUkW5Q51V9lkh/preview" 
    width="100%" 
    height="400" 
    allowfullscreen
    allow="autoplay">
  </iframe><br><br><br>
   </div>`,
   `<br><p class="hint"><span class="hinttitle">Note: Give the
                first letter + number of letters. </span><br><br><span class="bold">answer key: We take lessons every day?<br>student: We <em><mark>make</mark?></em>
                    lessons every day.</span><br><br><br><span class="hinttitle">HINT: ???</span><br><br><br> `,
   `<br><p class="hint"><span class="hinttitle">Note: Give the
                first and last letters + number of letters. </span><br><br><span class="bold">answer key: We take lessons every day?<br>student: We take <em><mark>___</mark?></em> every day.</span><br><br><br><span class="hinttitle">HINT: ???</span><br><br><br> `,
      ]
    },
    {
      title: "Incorrect Sequence",
      slides: [`<br><div><br><strong class="bold">Instruct the student to put the word in the correct order, using before and after.</strong></div><br><br>
     <iframe 
    src="https://drive.google.com/file/d/1pwqcC-Q3hA-9h_GjpwqhHogGUs979U_7/preview" 
    width="100%" 
    height="400" 
    allowfullscreen
    allow="autoplay">
  </iframe><br><br><br>
   </div>`,
   `<br><p class="hint"><span class="hinttitle">Note: Guide the student to the correct word order. </span><br><br><span class="bold">answer key: There are many museums in Tokyo.
<br>student: There are <em><mark>museums many</mark?></em> in Tokyo.</span><br><br><br><span class="hinttitle">HINT: ???</span><br><br><br> `,
      ]
    },
    {
      title: "Remove / Add ",
      slides: [`<br><div><br><strong class="bold">Tell the student which WORD to remove, but not what to add.</strong></div><br><br>
     <iframe 
    src="https://drive.google.com/file/d/1aPvKaOJnIPUVlP0zKzVEzOLyfN1BtjQf/preview" 
    width="100%" 
    height="400" 
    allowfullscreen
    allow="autoplay">
  </iframe><br><br><br>
   </div>`,

   `<br><div>
     <div><br><strong class="bold">Tell the student which LETTER to remove, but not what to add.</strong></div><br><br>
     <iframe 
    src="https://drive.google.com/file/d/1Oi5YI3fsuJBYzVr_if27NvG-6JhNjmVQ/preview" 
    width="100%" 
    height="400" 
    allowfullscreen
    allow="autoplay">
  </iframe><br><br><br>
   </div>`,

   `<br><div>
     <div><br><strong class="bold">Tell the student how many letters to add, but don’t say what the missing letters are.</strong><br><br> 
     
     <span class="bold">answer key: I'm not interested in history.<br>student: I'm not <em><mark>interest</mark?></em> in history.</span><br><br><br><span class="bold"><b>HINT: </b>Almost there! Please <b>add two more letters</b> to the word Interest.<span><br><br><br> 

   </div>`,

    `<br><div>
     <div><br><strong class="bold">Tell the student how many letters to add, but don’t say what the missing letters are.</strong><br><br> 
     
     <span class="bold">answer key: We're going to a hot spring.<br>student: We're <em><mark>go</mark?></em> to a hot spring.</span><br><br><br><span class="bold"><b>HINT: </b>Almost there! Please <b>add three more letters</b> to the word Go.<span><br><br><br> 

   </div>`,

   `<br><p class="hint"><span class="hinttitle">Note: Remove / Add </span><br><br><span class="bold">answer key: You can park here.<br>student: You can park <em><mark>car</mark?></em> here.</span><br><br><br><span class="hinttitle">HINT: ???</span><br><br><br> `,

   `<br><p class="hint"><span class="hinttitle">Note: Remove / Add </span><br><br><span class="bold">answer key: He takes a taxi every night.<br>student: He takes a taxi every <em><mark>nights</mark?></em>.</span><br><br><br><span class="hinttitle">HINT: ???</span><br><br><br> `,

   `<br><p class="hint"><span class="hinttitle">Note: Remove / Add </span><br><br><span class="bold">answer key: I'm excited about my new job.<br>student: I'm <em><mark>exciting</mark?></em> about my new job.</span><br><br><br><span class="hinttitle">HINT: ???</span><br><br><br> `,

   `<br><p class="hint"><span class="hinttitle">Note: Remove / Add </span><br><br><span class="bold">answer key: She has an older brother.<br>student: She has an  <em><mark>old</mark?></em> brother.</span><br><br><br><span class="hinttitle">HINT: ???</span><br><br><br> `,
      ]
    },
    {
      title: "Change the Tense of the word or sentence",
      slides: [`<br><div><br><strong class="bold">Ask the student to change a word to its PRESENT tense.</strong></div><br><br>
     <iframe 
    src="https://drive.google.com/file/d/1fVLbRA3u0MaHPrrvrkjU-IQKC9uOHFVk/preview" 
    width="100%" 
    height="400" 
    allowfullscreen
    allow="autoplay">
  </iframe><br><br><br>
   </div>`,
   `<br><div>
     <div><br><strong class="bold">Ask the student to change a word or sentence to its FUTURE tense.</strong></div><br><br>
     <iframe 
    src="https://drive.google.com/file/d/1z2nzMYowvO0e0uo6A8YWTbF-LIxSliTw/preview" 
    width="100%" 
    height="400" 
    allowfullscreen
    allow="autoplay">
  </iframe><br><br><br>
   </div>`,
   `<br><p class="hint"><span class="hinttitle">Note: Change the word to its Correct tense. </span><br><br><span class="bold">answer key: I want new glasses.<br>student: I <em><mark>wanted</mark?></em> new glasses.</span><br><br><br><span class="hinttitle">HINT: ???</span><br><br><br> `,
   `<br><p class="hint"><span class="hinttitle">Note: Note: Change the word to its Correct tense. </span><br><br><span class="bold">answer key: We tried Indian food for the first time.<br>student: We <em><mark>try</mark?></em> Indian food for the first time.</span><br><br><br><span class="hinttitle">HINT: ???</span><br><br><br> `,
   `<br><p class="hint"><span class="hinttitle">Note: Change the sentence to its Correct tense. </span><br><br><span class="bold">answer key: I'll go to the amusement park tonight.<br>student: <em><mark>I</mark?></em> go to the amusement park tonight.</span><br><br><br><span class="hinttitle">HINT: ???</span><br><br><br> `
      ]
    },
    {
      title: "Change the Form of a word (Plural / Singular)",
      slides: [`<br><div><br><strong class="bold">Ask the student to change a word to its PLURAL or SINGULAR form.</strong></div><br><br>
     <iframe 
    src="https://drive.google.com/file/d/11jVmW3VQlGlFoKrKzNK6UERKpLZ59rwo/preview" 
    width="100%" 
    height="400" 
    allowfullscreen
    allow="autoplay">
  </iframe><br><br><br>
   </div>`,
   `<br><p class="hint"><span class="hinttitle">Note: Change the word to its correct form. </span><br><br><span class="bold">answer key: Are they on their bicycles?<br>student: Are they on their <em><mark>bicycle</mark?></em></span><br><br><br><span class="hinttitle">HINT: ???</span><br><br><br> `,
   `<br><p class="hint"><span class="hinttitle">Note: Change the word to its correct form.. </span><br><br><span class="bold">answer key: I made a few mistakes in the report.<br>student: I made a few <em><mark>mistake</mark?></em> in the report.</span><br><br><br><span class="hinttitle">HINT: ???</span><br><br><br> `,
   `<br><p class="hint"><span class="hinttitle">Note: Change the word to its correct form. </span><br><br><span class="bold">answer key: He never eats meat.<br>student: He never <em><mark>eat</mark></em> meat. </span><br><br><br><span class="hinttitle">HINT: ???</span><br><br><br>`
      ]
    },
    {
      title: "Syllable Sounds",
      slides: [`<br><div><br><strong class="bold">Give only the Syllable Sounds as a last resort.</strong></div><br><br>
     <iframe 
    src="https://drive.google.com/file/d/1KMdhknpR4eE6kgH9nJPhDxU4-2PDt-Jn/preview" 
    width="100%" 
    height="400" 
    allowfullscreen
    allow="autoplay">
  </iframe><br><br><br>
   </div>`,
   `<br><p class="hint"><span class="hinttitle">Note: Give the
                Syllable Sounds as a last resort. </span><br><br><span class="bold">answer key: I'll make a reservation online.</span><br><br><br> `,
      ]
    },
    {
      title: "Opposite, Synonym, & Negative form",
      slides: [`<br><div><br><strong class="bold">Ask the student to change a word to its oppostite or synonymous word.</strong></div><br><br>
        <span class="bold">answer key: I don't have good ideas.<br>student: I don't have <em><mark>bad</mark><em> ideas.</span><br><br>
        <span class="hinttitle">HINT: Very close! Please change "bad" to its opposite.</span><br><br><br>
   </div>`,
   `<br><div><br><strong class="bold">You may ask the student to change a word to its negative form if the missing word is "NOT".</strong></div><br><br>
        <span class="bold">answer key: I don't have enough time for sleep.<br>student: I <em><mark>do </mark><em> have enough time for/to sleep..</span><br><br>
        <span class="hinttitle">HINT: Very close! Please change "do" to its negative form.</span><br><br><br>
   </div>`,
   `<br><p class="hint"><span class="hinttitle">Note: Change the word to its OPPOSITE or SYNONYMS. </span><br><br><span class="bold">answer key: He is mean to me.<br>student: <em><mark>She</mark><em> is mean to me. </span><br><br><br><span class="hinttitle">HINT: ???</span><br><br><br>`,
     `<br><p class="hint"><span class="hinttitle">Note: Change the word to its NEGATIVE form. </span><br><br><span class="bold">answer key: She didn't have any complaints.<br>student: She <em><mark>did</mark><em> have any complaints. </span><br><br><br><span class="hinttitle">HINT: ???</span><br><br><br>`
      ]
    }
  ]
},
      {
        title: "New, Review, and Shuffle pages",
        type: "presentation",
        description: "<span style='font-size:1.3em; font-weight:bold;'>View the presentation.</span>",
        link: "https://docs.google.com/spreadsheets/d/1fIkoMsrDsUFZCAaBJJgOKzUv0ICGaPwue-ReuJiOPFI/edit?gid=1560803091#gid=1560803091",
      },
      {
    title: "Pages' Sample Videos",
    type: "slideshow",
    slides: [
      `<br><div><strong class="bold">NEW page</strong></div><br><br>
     <iframe 
    src="https://drive.google.com/file/d/1Vee4Kx1rXSYbqwhebVZ56Qtrs3Mj4HRQ/preview" 
    width="100%" 
    height="400" 
    allowfullscreen
    allow="autoplay">
  </iframe><br><br><br>
   </div>`,
   
   `<br><div><strong class="bold">REVIEW page</strong></div><br><br>
     <iframe 
    src="https://drive.google.com/file/d/13EzsOgV-tNCwovtqWz__w-wErD43RwtM/preview" 
    width="100%" 
    height="400" 
    allowfullscreen
    allow="autoplay">
  </iframe><br><br><br>
   </div>`,

   `<br><div><strong class="bold">SHUFFLE page</strong></div><br><br>
     <iframe 
    src="https://drive.google.com/file/d/1Oinve8ZHaJhPSBRg-uGeXmeFEl0F9K1d/preview" 
    width="100%" 
    height="400" 
    allowfullscreen
    allow="autoplay">
  </iframe><br><br><br>
   </div>`,
    ]
  },
      
    ]
  },
  acp: {
    title: "ACP Materials",
    subtopics: [
      {
        title: "Active Conversation Practice",
        type: "slideshow",
      slides: [
        `<br><div><strong class="bold">Key Guidelines for ACP</div><br></strong>
     <span class="bold">• Do not call it “Free Talk." </span><br><br>
     <span class="bold">• Use simple English and adjust questions to the student’s level. </span><br><br>
     <span class="bold">• Be flexible. Rephrase or simplify instead of forcing understanding. </span><br><br>
     <span class="bold">• Maintain a speaking ratio of 80% Student | 20% Supporter. </span><br><br>
     <span class="bold">• Avoid work, school, family background, and sensitive topics (death, illness, politics, religion, etc.). </span><br><br>
     <br></div>`
      ]
      },
      {
        title: "ACP Bullseye",
        type: "presentation",
        description: "<span style='font-size:1.3em; font-weight:bold;'>View the presentation.</span>",
        link: "https://docs.google.com/presentation/d/1I58NorKR6mAfZx8CzLby0or317pG62flJkeVqhEydiU/edit?slide=id.g3b693b2247_0_0#slide=id.g3b693b2247_0_0"
      },
      {
        title: "ACP Picture Flash",
        type: "presentation",
        description: "<span style='font-size:1.3em; font-weight:bold;'>View the presentation.</span>",
        link: "https://docs.google.com/presentation/d/1JX5Qr1noC_XfpPcNFQ6-QhxO19FNL8JR-pHrxe0RNyI/edit#slide=id.g2f103d00146_0_177"
      },
      {
        title: "ACP Erande",
        type: "presentation",
        description: "<span style='font-size:1.3em; font-weight:bold;'>View the presentation.</span>",
        link: "https://docs.google.com/presentation/d/1VTHK6vSIozHzQ1LC8Gy-NRXRPlVo_bo4kg7R6mc94ns/edit#slide=id.g54947bdb7a_0_0"
      },
      {
  title: "Mimic Method",
  type: "slideshow",
  slides: [
    `
    <br>
    <div><strong class="bold">What is Mimic method?</strong></div><br>
    <span class="bold">• Mimic Method: Repeat what the student said in a complete and conversational sentence.
    
    <br><br>• This shows you understand them, boosts their confidence, and encourages them to speak more. </span><br><br><br>`,

    `<br><div><strong class="bold">How to apply the mimic method?</strong></div><br>
    <span class="bold">• Ask a question </span><br>
    <span class="bold">• Wait for the student’s response </span><br>
    <span class="bold">• React to what the student said </span><br>
    <span class="bold">• Mimic the student’s response </span><br>
    <span class="bold">• Ask a follow-up question based on their response. </span><br>
    <span class="bold">• Repeat the steps. </span><br><br><br>
    `,

    `<br><div><strong class="bold">Sample Mimic Video</div>(Beginner student)</strong><br><br>
     <iframe 
    src="https://drive.google.com/file/d/1PmVNK6rAcwHo2thiNryVq-CTecl787j_/preview" 
    width="100%" 
    height="400" 
    allowfullscreen
    allow="autoplay">
  </iframe><br><br><br>
   </div>`,

    `<br><div><strong class="bold">Sample Mimic Video</div>(Advance student)</strong><br><br>
     <iframe 
    src="https://drive.google.com/file/d/1urCmPtGgcaBdLR8PWE-Z2QVtYHJOTJ3u/preview" 
    width="100%" 
    height="400" 
    allowfullscreen
    allow="autoplay">
  </iframe><br><br><br>
   </div>`,
  ]
}
    ]
  },

 mockdemo: {
    title: "Mock Demo Videos",
    subtopics: [
      {
        title: "Mock Demo Videos",
        type: "slideshow",
        slides: [
          `<br><br><iframe src="https://drive.google.com/file/d/1ntafzUd3ECL0BIRrmPXtGAiB2DNhOLVY/preview" width="100%" height="400" allowfullscreen allow="autoplay"></iframe><br><br>
          <div style="margin-top:8px;font-weight:bold;">Mock Demo Sample 1</div><br><br>`,

          `<br><br><iframe src="https://drive.google.com/file/d/1VxHGTeUQOJercyco34aLqfzJe5jrFDm1/preview" width="100%" height="400" allowfullscreen allow="autoplay"></iframe><br><br>
          <div style="margin-top:8px;font-weight:bold;">Mock Demo Sample 2</div><br><br>`,

           `<br><br><iframe src="https://drive.google.com/file/d/16wRbWDQNnWntDkuB3Sy-GnNbyzbinsEb/preview" width="100%" height="400" allowfullscreen allow="autoplay"></iframe><br><br>
          <div style="margin-top:8px;font-weight:bold;">Mock Demo Sample 3</div><br><br>`,

          `<br><br><iframe src="https://drive.google.com/file/d/1GpnsoUP4aDkkIHt9-mAqD1mq1GWSVgCx/preview" width="100%" height="400" allowfullscreen allow="autoplay"></iframe><br><br>
          <div style="margin-top:8px;font-weight:bold;">Mock Demo Sample 4</div><br><br>`,
        ]
      }
    ]
  },
  quizfaq: {
  title: "Quiz, Feedback, FAQs",
  subtopics: [
    {
      title: "Training Quiz",
      type: "presentation",
      description: "<span style='font-size:1.2em;font-weight:bold;'>Test your knowledge with the training quiz form.</span>",
      link: "https://docs.google.com/forms/d/e/1FAIpQLSeNK43Yz1vomlkGBXPXBNi8xh9Qo3dpuu-5ohBCIYhquqBLXA/viewform"   
    },
    {
      title: "Training Feedback",
      type: "presentation",
      description: "<span style='font-size:1.2em;font-weight:bold;'>Submit your feedback for this training using the form below.</span>",
      link: "https://docs.google.com/forms/d/e/1FAIpQLSdkS_r06PvJTV1W78kwPEuhYqGZCpmykX_g0s6yT257yBK52A/viewform",
    },
    {
  title: "Frequently Asked Questions (FAQs)",
  type: "faq-group",
  description: "<span style='font-size:1.2em;font-weight:bold;'>Click a question to reveal the answer.</span>",
  topics: [
    {
      title: "Training",
      slides: [
        {
          question: "How many hours does the training usually last?",
          answer: "The session typically lasts three and a half hours."
        },
        {
          question: "Are training materials provided, or do we create our own lesson plans?",
          answer: "Training materials are already provided. Therefore, you do not need to create lesson plans."
        },
      ]
    },
    {
      title: "AQUES",
      slides: [
        {
          question: "What does AQUES aim to achieve?",
      answer: "AQUES aims to provide high-quality English lessons in a supportive environment, helping students achieve their goals and transform their lives through language."
        },
        {
          question: "How is the AQUES course designed?",
      answer: "The course is designed for Japanese students to improve their English conversation skills on an almost daily basis. Students can take lessons almost anytime, anywhere.<br><br>Learning a new language alone can be challenging, so the course provides a supportive environment with guidance from supporters in Japan and the Philippines. "
        },
        {
          question: "How are AQUES lessons conducted?",
      answer: "Lessons are one-on-one, giving students ample time to practice speaking. <br><br>We believe that this dedicated time and support make a real difference in their results."
        },
        {
          question: "How is the AQUES curriculum designed?",
      answer: "The AQUES curriculum includes Pronunciation Practice, Translation Exercises, and ACP Foundation. <br><br>It is carefully designed by our curriculum team in Japan, with a focus on usable expressions and language presented in a way that helps students continue their lessons smoothly."
        },
        {
          question: "What are the levels of the AQUES curriculum?",
      answer: "The curriculum has three levels: Lower Intermediate, Intermediate, and Higher Intermediate."
        },
        {
          question: "How does AQUES determine the starting level for each student?",
      answer: "Coaches in Japan determine the optimal starting level for each student, and the team is continuously developing new material for each level."
        },
      ]
    },
    {
      title: "Japan's English culture",
      slides: [
        {
          question: "How long do Japanese students study English?",
      answer: "In Japan, students are exposed to English for around 10 years, starting from grades 3 to 6, and continue studying it from grades 7 to 12, mainly to achieve high scores on English tests and exams."
        },
        {
          question: "What skills are emphasized in Japanese English classes?",
      answer: "Approximately 80% of English classes focus on reading and writing, 15% on listening, and only 5% on speaking."
        },
        {
          question: "How often do Japanese people use English in daily life?",
      answer: "In everyday life, the environment is predominantly Japanese: about 85.9% of interactions are in Japanese. <br><br>English is used in 5.1% of workplace situations, 4.1% with friends or family, and 4.9% in other contexts."
        },
      ]
    },
    {
      title: "Feedback Link",
      slides: [
        {
          question: "What is the Performance Feedback link?",
      answer: "It is the link where the student evaluates the lesson they had with you."
        },
      ]
    },
    {
      title: "Recommended Browsers",
      slides: [
        {
          question: "What are the recommended browsers?",
      answer: "Use the latest version of Google Chrome for best performance. Other supported browsers include Microsoft Edge, Brave, Firefox, Safari, and Vivaldi."
        },
      ]
    },
  ]
}
  ]
},
};

const modal = document.getElementById('modal');
const modalTitle = document.getElementById('modalTitle');
const modalSubtopics = document.getElementById('modalSubtopics');
const modalClose = document.getElementById('modalClose');

function safeAppend(parent, child, info) {
  try {
    if (!(parent instanceof Node)) {
      console.error('safeAppend: parent is NOT a DOM Node', { parent, info });
      return;
    }
    if (!(child instanceof Node)) {
      // Print a short, safe snapshot and return (DO NOT throw)
      let childInfo;
      try { childInfo = JSON.stringify(child).slice(0, 800); } catch (e) { childInfo = String(child); }
      console.error('safeAppend: child is NOT a DOM Node — skipping append', {
        typeofChild: typeof child,
        childConstructor: child && child.constructor && child.constructor.name,
        childSnapshot: childInfo,
        info
      });
      return;
    }
    parent.appendChild(child);
  } catch (err) {
    console.error('safeAppend: unexpected error while appending', err, { parent, child, info });
  }
}

// --- create containers for thumbnails and player (run once) ---
(function createVideoContainers(){
  const root = document.getElementById('app') || document.body;
  if (!document.getElementById('video-thumbs')) {
    const thumbs = document.createElement('div');
    thumbs.id = 'video-thumbs';
    thumbs.style.display = 'flex';
    thumbs.style.flexWrap = 'wrap';
    thumbs.style.gap = '.6rem';
    root.appendChild(thumbs);
  }
  if (!document.getElementById('video-player')) {
    const player = document.createElement('div');
    player.id = 'video-player';
    player.style.marginTop = '12px';
    root.appendChild(player);
  }
})();

// Open modal for section
document.querySelectorAll('.menu-card').forEach(card => {
  card.addEventListener('click', () => {
    const key = card.dataset.header;
    showModal(key);
  });
});

modalClose.addEventListener('click', closeModal);
modal.querySelector('.modal-backdrop').addEventListener('click', closeModal);

function showModal(sectionKey) {
  const section = DATA[sectionKey];
  modalTitle.textContent = section.title;
  modalSubtopics.innerHTML = '';
  // Render subtopics as accordion
  const ul = document.createElement('ul');
  ul.className = 'subtopic-list';
  const subtopics = section.subtopics || section.topics || section.videos || []; subtopics.forEach((sub, idx) => {
    const li = document.createElement('li');
    li.className = 'subtopic-item';
    // Accordion header
    const btn = document.createElement('button');
    btn.className = 'subtopic-btn';
    btn.innerHTML = `<span>${sub.title}</span> <span style="margin-left:auto;">${sub.type === "slideshow" ? "📝" : sub.type === "video" ? "🎬" : "📄"}</span>`;
    btn.setAttribute('aria-expanded', 'false');
    // Accordion panel
    let panel;
    if (sub.type === "video") {
  panel = document.createElement('div');
  panel.className = 'subtopic-panel';
  panel.innerHTML = `<div style="margin-bottom:10px;">${sub.text}</div>`;
  if (sub.videoUrl.includes("drive.google.com")) {
    // Use iframe for Google Drive videos
    panel.innerHTML += `

<iframe src="${sub.videoUrl}" width="100%" height="500" style="border-radius:7px;box-shadow:0 2px 12px #0001;" allow="autoplay; encrypted-media; picture-in-picture; fullscreen" allowfullscreen></iframe> `;
  } else {
    // Use <video> for direct links
    panel.innerHTML += `
      <video width="100%" controls style="border-radius:7px;box-shadow:0 2px 12px #0001;">
        <source src="${sub.videoUrl}" type="video/mp4">
        Your browser does not support the video tag.
      </video>
    `;
  }
  panel.style.display = 'none';
} else if (sub.type === "presentation") {
  panel = document.createElement('div');
  panel.className = 'subtopic-panel';
  panel.innerHTML = `<div>${sub.description}</div>`;

  // Determine button label
  let buttonLabel = sub.buttonLabel || "Open Presentation";
if (sub.linkType === "spreadsheet" || (sub.link && sub.link.includes("docs.google.com/spreadsheets"))) {
  buttonLabel = "Open Spreadsheet";
} else if (sub.linkType === "document") {
  buttonLabel = "Open Document";
} else if (sub.link && sub.link.includes("docs.google.com/forms")) {
  buttonLabel = "Open Form";
}

  if (sub.link) {
    panel.innerHTML += `
      <a href="${sub.link}" target="_blank" class="presentation-link">
        ${buttonLabel}
      </a>
    `;
  }
  panel.style.display = 'none';
} else if (sub.type === "slideshow") {
      panel = document.createElement('div');
      panel.className = 'subtopic-panel';
      panel.style.display = 'none';
      // Slideshow structure
      panel.innerHTML = `
        <div class="slide-content">${sub.slides[0]}</div>
        <div class="slideshow-controls">
          <button class="slide-prev" disabled>◀</button>
          <span class="slide-indicator">1/${sub.slides.length}</span>
          <button class="slide-next"${sub.slides.length <= 1 ? ' disabled' : ''}>▶</button>
        </div>
      `;
    } else if (sub.type === "video-group" || sub.type === "faq-group") {
  // Decide whether this group is FAQ-shaped (items contain .slides/questions)
  const items = Array.isArray(sub.topics) ? sub.topics : (Array.isArray(sub.videos) ? sub.videos : []);
  const looksLikeFaq = items.length > 0 && !!items[0].slides;
  const treatAsFaq = sub.type === "faq-group" || looksLikeFaq;

  if (treatAsFaq) {
    // --- FAQ rendering (no video thumbnails) ---
    panel = document.createElement('div');
    panel.className = 'subtopic-panel';
    panel.style.display = 'none';

    // optional group description
    const descHtml = sub.description || sub.groupDescription || '';
    if (descHtml) {
      const descEl = document.createElement('div');
      descEl.className = 'video-group-desc';
      descEl.style.marginBottom = '10px';
      descEl.innerHTML = descHtml;
      panel.appendChild(descEl);
    }

    // Build FAQ topics (supports sub.topics or sub.videos)
    const topics = items;
    (topics || []).forEach((topic, tIdx) => {
      const topicWrap = document.createElement('div');
      topicWrap.style.marginBottom = '14px';

      // Topic title
      const tTitle = document.createElement('div');
      tTitle.textContent = topic.title || `Topic ${tIdx + 1}`;
      tTitle.style.fontWeight = '700';
      tTitle.style.color = '#2563eb';
      tTitle.style.marginBottom = '8px';
      topicWrap.appendChild(tTitle);

      // Questions list (buttons using existing .subtopic-btn styles)
      const qList = document.createElement('div');
      qList.style.display = 'flex';
      qList.style.flexDirection = 'column';
      qList.style.gap = '8px';

      (topic.slides || []).forEach((slide, sIdx) => {
        // create wrapper that will hold the question button and the answer
const faqItem = document.createElement('div');
faqItem.className = 'faq-item';
faqItem.style.marginBottom = '8px';

// create the question button
const qBtn = document.createElement('button');
qBtn.type = 'button';
qBtn.className = 'subtopic-btn';
qBtn.textContent = slide.question || `Question ${sIdx + 1}`;
qBtn.style.textAlign = 'left';
qBtn.style.width = '100%';
qBtn.setAttribute('aria-expanded', 'false');

// append the button into the wrapper and the wrapper into the list
faqItem.appendChild(qBtn);
qList.appendChild(faqItem);

// click handler: ensure only one open per topic, toggle this item
qBtn.addEventListener('click', (ev) => {
  ev.stopPropagation();

  // Close any other open item inside the same topic (only one open at a time)
  const prevOpen = modalSubtopics.querySelector('.faq-item.faq-open');
  if (prevOpen && prevOpen !== faqItem) {
    const prevAns = prevOpen.querySelector('.faq-answer');
    if (prevAns) prevAns.remove();
    const prevBtn = prevOpen.querySelector('.subtopic-btn');
    if (prevBtn) {
      prevBtn.classList.remove('faq-active');
      prevBtn.setAttribute('aria-expanded', 'false');
    }
    prevOpen.classList.remove('faq-open');
  }

  // Toggle this item
  const existingAnswer = faqItem.querySelector('.faq-answer');
  if (existingAnswer) {
    // close it
    existingAnswer.remove();
    faqItem.classList.remove('faq-open');
    qBtn.classList.remove('faq-active');
    qBtn.setAttribute('aria-expanded', 'false');
    return;
  }

  // create answer element and insert it inside the same wrapper
  const ans = document.createElement('div');
  ans.className = 'faq-answer';
  ans.style.margin = '6px 0 12px 0';
  ans.innerHTML = `<ul style="margin:0; padding-left:1.05rem;"><li style="margin:6px 0; line-height:1.45; color:#111;">${slide.answer || '<em>No answer provided.</em>'}</li></ul>`;

  faqItem.appendChild(ans);

  // mark wrapper and button as active
  faqItem.classList.add('faq-open');
  qBtn.setAttribute('aria-expanded', 'true');
  qBtn.classList.add('faq-active');

  ans.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
});

// keyboard activation: open/close with Enter or Space
qBtn.addEventListener('keydown', (e) => {
  if (e.key === 'Enter' || e.key === ' ') {
    e.preventDefault();
    qBtn.click();
  }
});
      });

      // If no slides/questions, show a placeholder
      if ((topic.slides || []).length === 0) {
        const note = document.createElement('div');
        note.style.color = '#666';
        note.style.fontSize = '.95rem';
        note.textContent = 'No Q&A available for this topic.';
        qList.appendChild(note);
      }

      topicWrap.appendChild(qList);
      panel.appendChild(topicWrap);
    });
    

    panel.style.display = 'none';
  } else {
    // --- This is a real video-group; render thumbnail-styled items and in-place players ---
    panel = document.createElement('div');
    panel.className = 'subtopic-panel';
    panel.innerHTML = `<div class="video-group-desc" style="margin-bottom:10px;">${sub.description || ""}</div>`;

    const videoList = document.createElement('ul');
    videoList.style.display = 'grid';
    videoList.style.gridTemplateColumns = 'repeat(auto-fit, minmax(220px, 1fr))';
    videoList.style.gap = '14px';
    videoList.style.listStyle = 'none';
    videoList.style.padding = '0';

    const videoItems = [];
    let openedIndex = null;

    (sub.videos || []).forEach((vid, idx) => {
      const videoItem = document.createElement('li');
      videoItem.style.margin = '7px 0';
      videoItem.style.position = 'relative';

      // Thumbnail-styled button
      const videoBtn = document.createElement('button');
      videoBtn.className = 'video-thumb-btn';
      videoBtn.style.width = '100%';
      videoBtn.style.padding = '0';
      videoBtn.style.borderRadius = '6px';
      videoBtn.style.border = '1px solid #cdd6f5';
      videoBtn.style.background = '#fff';
      videoBtn.style.cursor = 'pointer';
      videoBtn.style.textAlign = 'left';
      videoBtn.style.overflow = 'hidden';

      // inner HTML: thumbnail image + play overlay + title
videoBtn.innerHTML = ''
  + '<div class="video-thumb-title">' + (vid.title || '') + '</div>'
  + '<div style="position:relative;width:100%;">'
  +   '<img src="' + (vid.thumbnail || '') + '" alt="' + ((vid.title || '').replace(/"/g, '&quot;')) + '" style="display:block;width:100%;height:140px;object-fit:cover;">'
  +   '<div style="position:absolute;left:50%;top:45%;transform:translate(-50%,-50%);font-size:28px;color:rgba(255,255,255,.95);text-shadow:0 2px 6px rgba(0,0,0,.6);pointer-events:none;">▶</div>'
  + '</div>';

      // Container for in-place player (unused until opened)
      const playerContainer = document.createElement('div');

      videoBtn.onclick = function (e) {
        e.stopPropagation();

        const descEl = panel.querySelector('.video-group-desc'); if (descEl) descEl.style.display = 'none';

        // Close previously opened item if different
        if (openedIndex !== null && openedIndex !== idx && videoItems[openedIndex]) {
          const prevItem = videoItems[openedIndex];
          const prevWrapper = prevItem.querySelector('.inplace-player');
          if (prevWrapper) prevWrapper.remove();
          const prevBtn = prevItem.querySelector('button');
          if (prevBtn) prevBtn.style.display = '';
          openedIndex = null;
        }

        // Toggle close if already open
        const existingWrapper = videoItem.querySelector('.inplace-player');
        if (existingWrapper) {
          existingWrapper.replaceWith(videoBtn);
          videoBtn.style.display = '';
          if (descEl) descEl.style.display = '';
          openedIndex = null;
          videoItems.forEach(item => item.style.display = '');
          return;
        }

        // Hide other items so this one stands out
        videoItems.forEach((item, i) => {
          item.style.display = (i === idx) ? '' : 'none';
        });

        // Create wrapper that will contain the player and a close button
        const wrapper = document.createElement('div');
        wrapper.className = 'inplace-player';
        wrapper.style.width = '100%';
        wrapper.style.marginTop = '8px';

        // Optional title above the player
        const videoTitleElem = document.createElement('div');
        videoTitleElem.textContent = vid.title || '';
        videoTitleElem.style.fontWeight = 'bold';
        videoTitleElem.style.margin = '8px 0';
        wrapper.appendChild(videoTitleElem);

        // Insert appropriate player based on source/url
        const url = vid.url || vid.videoUrl || '';
        if (vid.source === 'youtube' || /youtube\.com|youtu\.be/.test(url)) {
          const idMatch = url.match(/(?:v=|youtu\.be\/|embed\/)([A-Za-z0-9_-]{6,})/);
          const id = idMatch ? idMatch[1] : url;
          const iframe = document.createElement('iframe');
          iframe.src = `https://www.youtube.com/embed/${id}?autoplay=1&rel=0&modestbranding=1`;
          iframe.allow = 'autoplay; encrypted-media; picture-in-picture; fullscreen';
          iframe.setAttribute('allowfullscreen', '');
          iframe.width = '100%';
          iframe.height = '480';
          iframe.frameBorder = 0;
          iframe.style.borderRadius = '7px';
          iframe.style.boxShadow = '0 2px 12px rgba(0,0,0,0.06)';
          wrapper.appendChild(iframe);
        } else if (vid.source === 'drive' || /drive\.google\.com/.test(url)) {
          const iframe = document.createElement('iframe');
          iframe.src = url; // should be /preview for drive
          iframe.width = '100%';
          iframe.height = '480';
          iframe.style.borderRadius = '7px';
          iframe.style.boxShadow = '0 2px 12px rgba(0,0,0,0.06)';
          iframe.allow = 'autoplay; encrypted-media; picture-in-picture; fullscreen';
          iframe.setAttribute('allowfullscreen', '');
          wrapper.appendChild(iframe);
        } else if (vid.source === 'mp4' || /\.mp4($|\?)/.test(url)) {
          const vidEl = document.createElement('video');
          vidEl.controls = true;
          vidEl.src = url;
          if (vid.thumbnail) vidEl.poster = vid.thumbnail;
          vidEl.style.width = '100%';
          vidEl.style.height = '480px';
          vidEl.style.borderRadius = '7px';
          vidEl.style.boxShadow = '0 2px 12px rgba(0,0,0,0.06)';
          wrapper.appendChild(vidEl);
          vidEl.play().catch(()=>{});
        } else {
          // fallback: open in new tab if unknown source
          window.open(url || vid.link || '#', '_blank', 'noopener');
          videoItems.forEach(item => item.style.display = '');
          return;
        }

        // Close button that restores the thumbnail button back in place
        const closeRow = document.createElement('div');
        closeRow.style.display = 'flex';
        closeRow.style.justifyContent = 'center';
        closeRow.style.marginTop = '8px';
        const closeBtn = document.createElement('button');
        closeBtn.textContent = 'Close';
        closeBtn.style.padding = '.35rem .6rem';
        closeBtn.style.borderRadius = '6px';
        closeBtn.style.border = '1px solid #ccd';
        closeBtn.style.background = '#fff';
        closeBtn.style.cursor = 'pointer';
        closeBtn.onclick = function (ev) {
          ev.stopPropagation();
          wrapper.replaceWith(videoBtn);
          videoBtn.style.display = '';
          const descEl2 = panel.querySelector('.video-group-desc');
          if (descEl2) descEl2.style.display = '';
          openedIndex = null;
          videoItems.forEach(item => item.style.display = '');
        };
        closeRow.appendChild(closeBtn);
        wrapper.appendChild(closeRow);

        // Replace the thumbnail button with the wrapper (player) in-place
        videoBtn.replaceWith(wrapper);

        // mark as open
        openedIndex = idx;

        // scroll into view
        wrapper.scrollIntoView({ behavior: 'smooth', block: 'start' });
      };

      videoItem.appendChild(videoBtn);
      videoItem.appendChild(playerContainer);
      videoItems.push(videoItem);
      videoList.appendChild(videoItem);
    });

        panel.appendChild(videoList);
    panel.style.display = 'none';
    }
  } else if (sub.type === "lesson-grid") {
  panel = document.createElement('div');
  panel.className = 'subtopic-panel';
  panel.style.display = 'none';

  // Create the grid container
  const grid = document.createElement('div');
  grid.style.display = "grid";
  grid.style.gridTemplateColumns = "repeat(auto-fit, minmax(220px, 1fr))";
  grid.style.gap = "16px";

  // Track expanded card
  let expandedIdx = null;

  (sub.lessons || []).forEach((lesson, idx) => {
    const card = document.createElement('div');
    card.className = 'lesson-card';
    card.style.border = "1px solid #cdd6f5";
    card.style.borderRadius = "8px";
    card.style.background = "#f9fbff";
    card.style.boxShadow = "0 2px 8px #0001";
    card.style.padding = "0";
    card.style.transition = "box-shadow .2s";
    card.style.overflow = "hidden";
    card.style.display = "flex";
    card.style.flexDirection = "column";

    // Card header/title (clickable)
    const cardHeader = document.createElement('button');
    cardHeader.textContent = lesson.title;
    cardHeader.style.background = "none";
    cardHeader.style.border = "none";
    cardHeader.style.fontWeight = "bold";
    cardHeader.style.fontSize = "1rem";
    cardHeader.style.padding = "15px";
    cardHeader.style.cursor = "pointer";
    cardHeader.style.textAlign = "left";
    cardHeader.style.width = "100%";

    // Card body (hidden by default)
    // Card body (hidden by default)
const cardBody = document.createElement('div');
cardBody.style.display = "none";
cardBody.style.padding = "0 15px 15px 15px";

// If slides property exists, show as slideshow
// If slides property exists, show as slideshow
if (Array.isArray(lesson.slides) && lesson.slides.length) {
  let slideIndex = 0; // dedicated index for this slideshow
  const slideContent = document.createElement('div');
  slideContent.className = 'lesson-slide-content';
  slideContent.innerHTML = lesson.slides[slideIndex];

  // Controls
  const controls = document.createElement('div');
  controls.style.display = "flex";
  controls.style.alignItems = "center";
  controls.style.justifyContent = "center";
  controls.style.marginTop = "12px";

  const prevBtn = document.createElement('button');
  prevBtn.textContent = '◀';
  prevBtn.disabled = true;

  const indicator = document.createElement('span');
  indicator.textContent = `${slideIndex + 1}/${lesson.slides.length}`;
  indicator.style.margin = "0 8px";

  const nextBtn = document.createElement('button');
  nextBtn.textContent = '▶';
  nextBtn.disabled = lesson.slides.length <= 1;

  function updateSlide() {
    slideContent.innerHTML = lesson.slides[slideIndex];
    indicator.textContent = `${slideIndex + 1}/${lesson.slides.length}`;
    prevBtn.disabled = slideIndex === 0;
    nextBtn.disabled = slideIndex === lesson.slides.length - 1;
  }

  prevBtn.onclick = () => {
    if (slideIndex > 0) {
      slideIndex--;
      updateSlide();
    }
  };
  nextBtn.onclick = () => {
    if (slideIndex < lesson.slides.length - 1) {
      slideIndex++;
      updateSlide();
    }
  };

  controls.appendChild(prevBtn);
  controls.appendChild(indicator);
  controls.appendChild(nextBtn);

  cardBody.appendChild(slideContent);
  cardBody.appendChild(controls);
} else {
  // Otherwise, show single text if present
  cardBody.innerHTML = `<div style="margin-bottom:8px;">${lesson.text || ""}</div>`;
}

// Optionally: video
if (lesson.videoUrl) {
  cardBody.innerHTML += `
    <iframe src="${lesson.videoUrl}" width="100%" height="500" style="border-radius:5px;box-shadow:0 1px 8px #0001;" allow="autoplay"></iframe>
  `;
}

    // Card click logic
    // replace the existing cardHeader.onclick = function() { ... } with this
cardHeader.onclick = function() {
  const guideRow = panel.querySelector('.hint-guide-row');

  if (expandedIdx === idx) {
    expandedIdx = null;
    grid.childNodes.forEach((c, i) => {
      c.style.display = '';
      const btnChild = c.querySelector('button');
      if (btnChild) btnChild.style.display = '';
      const divChild = c.querySelector('div');
      if (divChild) divChild.style.display = "none";
    });
    if (guideRow && grid) {
      grid.appendChild(guideRow);
      guideRow.style.display = ''; 
    } else if (guideRow) {
      guideRow.style.display = '';
    }
  } else {
    
    expandedIdx = idx;
    grid.childNodes.forEach((c, i) => {
      c.style.display = (i === idx) ? '' : 'none';
      const btnChild = c.querySelector('button');
      if (btnChild) btnChild.style.display = (i === idx) ? 'none' : '';
      const divChild = c.querySelector('div');
      if (divChild) divChild.style.display = (i === idx) ? '' : 'none';
    });
    cardBody.style.display = "";
    if (guideRow) guideRow.style.display = 'none';
    setTimeout(() => {
      card.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 0);
  }
};

    card.appendChild(cardHeader);
    card.appendChild(cardBody);
    // Diagnostic-safe append (replaces: grid.appendChild(card);)
try {
  // Snapshot some info safely
  const info = {
    lessonIndex: (typeof idx !== 'undefined') ? idx : null,
    cardIsNode: !!(typeof card !== 'undefined' && card instanceof Node),
    cardType: Object.prototype.toString.call(typeof card !== 'undefined' ? card : null),
    typeofCard: typeof card,
    cardConstructor: (card && card.constructor && card.constructor.name) || null,
    gridIsNode: !!(grid instanceof Node),
    gridTag: grid && grid.tagName,
    // small safe lesson snapshot (if available)
    lessonSnapshot: (function(){
      try { return typeof lesson !== 'undefined' ? JSON.stringify(lesson).slice(0,1000) : null; }
      catch(e){ return String(lesson); }
    })()
  };

  if (!info.cardIsNode) {
    console.error('APPEND DIAGNOSTIC: card is NOT a Node — skipping append', info);
    // skip adding this item so UI can still render other items
  } else {
    // Good node -> append
    grid.appendChild(card);
    console.log('APPEND DIAGNOSTIC: appended card at lessonIndex', info.lessonIndex, { gridTag: info.gridTag });
  }
} catch (err) {
  console.error('APPEND DIAGNOSTIC: unexpected error during append attempt', err, {
    typeofCard: typeof card,
    card: card,
    grid: grid,
    idx: typeof idx !== 'undefined' ? idx : null,
    lesson: typeof lesson !== 'undefined' ? lesson : null
  });
}
  });

    panel.appendChild(grid);

  // Only add the lesson-plan CTA when the sub object provides a guideUrl
  if (sub.guideUrl) {
    const guideRow = document.createElement('div');
    guideRow.style.marginTop = '12px';
    guideRow.style.display = 'flex';
    guideRow.style.justifyContent = 'center';

    const guideLink = document.createElement('a');
    guideLink.href = sub.guideUrl;
    guideLink.target = '_blank';
    guideLink.rel = 'noopener';
    guideLink.className = 'presentation-link view-lesson-btn';
    guideLink.innerHTML = '<span class="link-icon" aria-hidden>📄</span> View the Lesson Plan Link';

    guideRow.appendChild(guideLink);
    panel.appendChild(guideRow);
  }

} 
    btn.addEventListener('click', function() {
  // If this is a lesson-grid and already open, and a card is expanded, restore the grid
  if (
    sub.type === "lesson-grid" &&
    panel.style.display !== 'none'
  ) {
    // Find the grid
    const grid = panel.querySelector('div[style*="display: grid"]');
    if (grid) {
      // If any card is expanded (only one card is shown), restore all
      const cards = grid.childNodes;
      let expandedIdx = -1;
      cards.forEach((c, i) => {
        if (c.style.display !== '') expandedIdx = i;
      });
      if (expandedIdx !== -1 && cards.length > 1) {
        // Show all cards, hide all bodies except collapsed
        cards.forEach((c, i) => {
          c.style.display = '';
          c.querySelector('button').style.display = '';
          c.querySelector('div').style.display = "none";
        });
        // Do NOT close the panel, just restore the grid
        return;
      }
    }
  }

  // Otherwise, collapse all as before
  ul.querySelectorAll('.subtopic-btn').forEach(b => {
    b.classList.remove('active');
    b.setAttribute('aria-expanded', 'false');
  });
  ul.querySelectorAll('.subtopic-panel').forEach(p => p.style.display = 'none');
  // Open this
  btn.classList.add('active');
  btn.setAttribute('aria-expanded', 'true');
  panel.style.display = '';
  // If slideshow, reset to first slide
  if (sub.type === "slideshow") {
    setupSlideshow(panel, sub.slides);
  }
});
    // Open the first subtopic by default
    if (idx === 0) {
      btn.classList.add('active');
      btn.setAttribute('aria-expanded', 'true');
      panel.style.display = '';
      if (sub.type === "slideshow") setupSlideshow(panel, sub.slides);
    }
    li.appendChild(btn);

// REPLACE the existing hint-button insertion with this block
// Insert this RIGHT BEFORE: li.appendChild(panel);
if (/hint/i.test(sub.title || '') || /hint/i.test(section.title || '')) {
  if (!panel.querySelector('.hint-guide-row')) {
    const guideUrl = 'https://docs.google.com/document/d/1jYj4iZbV1HDhFQ7vBVp7T_CU3bO5xBgCkKdRhak5I4k/edit?tab=t.0';
    const guideRow = document.createElement('div');
    guideRow.className = 'hint-guide-row';
    // keep markup only; visual layout handled in CSS now
    const guideLink = document.createElement('a');
    guideLink.href = guideUrl;
    guideLink.target = '_blank';
    guideLink.rel = 'noopener noreferrer';
    guideLink.className = 'presentation-link';
    guideLink.innerHTML = '<span class="link-icon" aria-hidden>📄</span> Training Hint Guide';
    guideRow.appendChild(guideLink);

    // Append into the grid if present so it behaves like other grid items
    const gridEl = panel.querySelector('div[style*="display: grid"], div[style*="grid-template-columns"], .lesson-grid');
    if (gridEl) {
      gridEl.appendChild(guideRow);
    } else {
      panel.appendChild(guideRow);
    }
  }
}
    li.appendChild(panel);
    ul.appendChild(li);
  });
  modalSubtopics.appendChild(ul);
  modal.classList.remove('hidden');
  document.body.style.overflow = "hidden";
}

function closeModal() {
  modal.classList.add('hidden');
  document.body.style.overflow = "";
}

function setupSlideshow(panel, slides) {
  let idx = 0;
  const slideContent = panel.querySelector('.slide-content');
  const indicator = panel.querySelector('.slide-indicator');
  const prevBtn = panel.querySelector('.slide-prev');
  const nextBtn = panel.querySelector('.slide-next');

  function update() {
    slideContent.innerHTML = slides[idx];
    indicator.textContent = `${idx+1}/${slides.length}`;
    prevBtn.disabled = idx === 0;
    nextBtn.disabled = idx === slides.length - 1;
  }

  prevBtn.onclick = () => {
    if (idx > 0) {
      idx--;
      update();
    }
  };
  nextBtn.onclick = () => {
    if (idx < slides.length - 1) {
      idx++;
      update();
    }
  };
  update();
}

// Keyboard accessibility: close modal on Escape
document.addEventListener('keydown', e => {
  if (!modal.classList.contains('hidden') && e.key === "Escape") {
    closeModal();
  }
});

// --- Image Modal (Lightbox) Logic ---
document.addEventListener('DOMContentLoaded', function() {
  var imgModal = document.getElementById('img-modal');
  var imgModalImg = document.getElementById('img-modal-img');
  var imgModalClose = document.getElementById('img-modal-close');

  document.body.addEventListener('click', function(e) {
  // For debugging: log all clicks
  if (e.target.classList.contains('enlargeable-img')) {
    imgModalImg.src = e.target.src;
    imgModal.style.display = 'flex';
  }
  // New handler for button placeholder
  if (e.target.classList.contains('enlargeable-img-btn')) {
    imgModalImg.src = e.target.getAttribute('data-img-src');
    imgModal.style.display = 'flex';
  }
});

  imgModalClose.addEventListener('click', function() {
    imgModal.style.display = 'none';
    imgModalImg.src = '';
  });
  imgModal.addEventListener('click', function(e) {
    if (e.target === imgModal) {
      imgModal.style.display = 'none';
      imgModalImg.src = '';
    }
  });
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && imgModal.style.display === 'flex') {
      imgModal.style.display = 'none';
      imgModalImg.src = '';
    }
  });
});