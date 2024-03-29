// Create a function to change
    // the hash value of the page
    function changeLanguage(lang) {
        location.hash = lang;
        location.reload();
      }

      const activeLanguage = document.querySelector("#active-language");
      const languageList = document.querySelector("#language-list")

      const englishIcon = document.querySelector(".en");
      const croatianIcon = document.querySelector(".hr")

      // Hero Section text elements
      const welcomeSubHeader = document.querySelector(".welcome-subheader");
      const welcomeHeader = document.querySelector(".welcome-header");



      //All text elements
      const aboutHeader = document.querySelector(".about-header");
      const aboutSubHeader = document.querySelector(".about-sub-header");
      const aboutText = document.querySelector(".about-text");
      const carouselRoomOneSubtitle = document.querySelector(".carousel-room-one-subtitle");
      const carouselRoomOneTitle = document.querySelector(".carousel-room-one-title");
      const carouselRoomOneText = document.querySelector(".carousel-room-one-text");
      const carouselRoomTwoSubtitle = document.querySelector(".carousel-room-two-subtitle");
      const carouselRoomTwoTitle = document.querySelector(".carousel-room-two-title");
      const carouselRoomTwoText = document.querySelector(".carousel-room-two-text");
      const carouselRoomThreeSubtitle = document.querySelector(".carousel-room-three-subtitle");
      const carouselRoomThreeTitle = document.querySelector(".carousel-room-three-title");
      const carouselRoomThreeText = document.querySelector(".carousel-room-three-text");
      // const carouselRoomFourSubtitle = document.querySelector(".carousel-room-four-subtitle");
      // const carouselRoomFourTitle = document.querySelector(".carousel-room-four-title");
      // const carouselRoomFourText = document.querySelector(".carousel-room-four-text");
      const whiteBoxTitle = document.querySelector(".white-box-title");
      const whiteBoxText = document.querySelector(".white-box-text");
      const servicesTitle = document.querySelector(".services-title");
      const servicesSubtitle = document.querySelector(".services-subtitle");
      const servicesFirstCardTitle = document.querySelector(".services-first-card-title");
      const servicesFirstCardText =  document.querySelector(".services-first-card-text");
      const servicesSecondCardTitle = document.querySelector(".services-second-card-title");
      const servicesSecondCardText = document.querySelector(".services-second-card-text");
      const servicesThirdCardTitle = document.querySelector(".services-third-card-title");
      const servicesThirdCardText = document.querySelector(".services-third-card-text");


      // Excursion Section

      const excursionTitle = document.querySelector(".excursion__title");
      const excursionTextOne = document.querySelector(".excursion-text-one");
      const excursionTextTwo = document.querySelector(".excursion-text-two");
      const excursionTextThree = document.querySelector(".excursion-text-three");


      const contactUsSubHeader = document.querySelector(".contact-us-subheader");
      const contactUsHeader = document.querySelector(".contact-us-header");
      const phoneText = document.querySelector(".phone-text");
      const meetText = document.querySelector(".meet-text");
      const connectText = document.querySelector(".connect-text");
      const countryText = document.querySelector(".country-text")

      // Links
      const linkAboutUs = document.querySelectorAll(".about-us-link");
      const linkRooms = document.querySelectorAll(".rooms-link");
      const linkServices = document.querySelectorAll(".services-link");
      const linkContacts = document.querySelectorAll(".contact-us-link");
      
      // Button text
      const ctaButtonSubmitText = document.querySelector(".cta-button-submit-text");
      const ctaButtonText = document.querySelectorAll(".cta-button-text");


      // contact form text 
      const nameText = document.querySelector(".name-text");
      const errorHintName = document.querySelector(".error-hint-name");
      const errorHintEmail = document.querySelector(".error-hint-email");
      const emailText = document.querySelector(".email-text");
      const messageText = document.querySelector(".message-text");
      const successText = document.querySelector(".success-text")


      // Define the language reload anchors
      var language = {
        eng: {
          welcomeSubHeader: "One location.", 
          welcomeHeader: "More than one way to experience vacation",
          aboutHeader: "About Us",
          aboutSubHeader: "Surrounded by nature",
          aboutText: "Hotel Zagreb is located in the town of Karlobag. The location on the seashore, surrounded by pine trees, makes it an ideal place for your vacation.",
          ctaButtonText: "Contact us",
          carouselRoomOneSubTitle: "Overlooking the sea or the park",
          carouselRoomOneTitle:"Standard room",
          carouselRoomOneText: "For 2 to 4 persons, it is located in the main building and is equipped with a double bed, with two extra single beds and a bathroom. Standard rooms are available with french balcony or without balcony.",

          carouselRoomTwoSubtitle: "Overlooking the sea or the park",
          carouselRoomTwoTitle:"Superior Room",
          carouselRoomTwoText: "For 2 to 4 persons, it is located in the main building and is equipped with a double bed, with two extra single beds, a bathroom and a balcony with a sea view.",

          carouselRoomThreeSubtitle: "Overlooking the sea",
          carouselRoomThreeTitle:"Suite room",
          carouselRoomThreeText: "Located in the main building, it has one bedroom and a living room, one big bathroom and an extra WC, as well as a big balcony with a sea view. Ideal for 4 to 5 persons.",

          // carouselRoomFourSubTitle: "Overlooking the sea",
          // carouselRoomFourTitle:"Superior room",
          // carouselRoomFourText: "It is located in the main building and is equipped with a double bed, with two extra single beds, a bathroom and a balcony.",
          whiteBoxTitle: "<h2>SLEEP WELL<br> <span>REST WELL</span></h2>",
          whiteBoxText: "Enjoy pleasant Mediterranean weather in Karlobag with sea temperatures up to 26C in the summer",
          servicesTitle: "Services",
          servicesSubTitle: "SOMETHING FOR EVERYONE",

          servicesFirstCardTitle: "FUN",
          servicesFirstCardText: "From 1st of July until 20th of September enjoy live music, and have fun with our animation programs for children and adults from 20th of June until 1st of 9 September.",
          

          servicesSecondCardTitle: "ACTIVITIES",
          servicesSecondCardText: "Outdoor and indoor pool, Finnish sauna, tennis courts, volleyball and mini golf for guests that like active vacation",
          
          servicesThirdCardTitle: "GASTRONOMY",
          servicesThirdCardText: "Enjoy rich and diverse flavors of the Mediterranean cuisine with a hint of the Velebit region",
          

          // EXCURSION SECTION

          excursionTitle: "Excursion",
          excursionTextOne: "Karlobag is the ideal starting point for excursions to Velebit, Plitvice, Paklenica, river Una, and many more. You will talk about your unforgettable trip to the island of Pag by boat Marino for years.",
          excursionTextTwo: "You can use the about 4 km long promenade by the sea to the neighboring town of Ribarica for running or a pleasant walk.",
          excursionTextThree: "The large Tatinja Beach with free parking and catering facilities is just a minute’s drive or a 10-minute walk from the hotel.",


          contactUsSubHeader: "Need more information?",
          contactUsHeader: "<span>Lets get in </span> touch!",
          phoneText: "Phone",
          meetText: "Meet",
          countryText: "Croatia",
          connectText: "Connect",

          ctaButtonSubmitText: "Submit",
          ctaButtonText: "Contact us",

          linkAboutUs: "About Us",
          linkContacts: "Contact Us",
          linkServices: "Services",
          linkRooms : "Rooms",
          nameText: "Your name",
          emailText: "Your e-mail",
          messageText: "Your message",
          errorHintEmail: "Your email is invalid",
          errorHintName: "Your name is invalid"

        },
        hr: {
          
        },
      };
    
      // Check if a hash value exists in the URL
      if (window.location.hash) {
    
        // Set the content of the webpage 
        // depending on the hash value
        if (window.location.hash == "#eng") {
          welcomeSubHeader.textContent =
          language.eng.welcomeSubHeader;

          welcomeHeader.textContent =
          language.eng.welcomeHeader;

          aboutHeader.textContent =
          language.eng.aboutHeader;

          aboutSubHeader.textContent =
          language.eng.aboutSubHeader;

          aboutText.textContent =
          language.eng.aboutText;

          carouselRoomOneSubtitle.textContent =
            language.eng.carouselRoomOneSubTitle;

            carouselRoomOneTitle.textContent =
            language.eng.carouselRoomOneTitle;

            carouselRoomOneText.textContent =
            language.eng.carouselRoomOneText;

            carouselRoomTwoSubtitle.textContent =
            language.eng.carouselRoomTwoSubtitle;

            carouselRoomTwoTitle.textContent =
            language.eng.carouselRoomTwoTitle;

            carouselRoomTwoText.textContent =
            language.eng.carouselRoomTwoText;

            carouselRoomThreeSubtitle.textContent =
            language.eng.carouselRoomThreeSubtitle;

            carouselRoomThreeTitle.textContent =
            language.eng.carouselRoomThreeTitle;

            carouselRoomThreeText.textContent =
            language.eng.carouselRoomThreeText;

            // carouselRoomFourSubtitle.textContent =
            // language.eng.carouselRoomFourSubtitle;

            // carouselRoomFourTitle.textContent =
            // language.eng.carouselRoomFourTitle;

            // carouselRoomFourText.textContent =
            // language.eng.carouselRoomFourText;

          
            whiteBoxTitle.innerHTML =
            language.eng.whiteBoxTitle;

                
            whiteBoxText.textContent =
            language.eng.whiteBoxText;


                      
            servicesTitle.textContent =
            language.eng.servicesTitle;

            servicesSubtitle.textContent =
            language.eng.servicesSubTitle;

          servicesFirstCardTitle.textContent =
          language.eng.servicesFirstCardTitle;

          servicesFirstCardText.textContent =
          language.eng.servicesFirstCardText;
          
          servicesSecondCardTitle.textContent =
          language.eng.servicesSecondCardTitle;

          servicesSecondCardText.textContent =
          language.eng.servicesSecondCardText;

          servicesThirdCardTitle.textContent =
          language.eng.servicesThirdCardTitle;

          servicesThirdCardText.textContent =
          language.eng.servicesThirdCardText;


          // Excursion Section 

          excursionTitle.textContent = 
          language.eng.excursionTitle

          excursionTextOne.textContent =
          language.eng.excursionTextOne

          excursionTextTwo.textContent = 
          language.eng.excursionTextTwo

          excursionTextThree.textContent =
          language.eng.excursionTextThree

          contactUsSubHeader.textContent =
          language.eng.contactUsSubHeader;

          contactUsHeader.innerHTML =
          language.eng.contactUsHeader;

          phoneText.textContent =
          language.eng.phoneText;
          
         meetText.textContent =
          language.eng.meetText;

          connectText.textContent =
          language.eng.connectText;

          countryText.textContent =
          language.eng.countryText;

          ctaButtonText.forEach(ctaButtonText => ctaButtonText.textContent =
            language.eng.ctaButtonText);

            ctaButtonSubmitText.textContent = 
            language.eng.ctaButtonSubmitText;



          linkAboutUs.forEach(linkAboutUs => linkAboutUs.textContent =
            language.eng.linkAboutUs);

            linkServices.forEach(linkServices => linkServices.textContent =
              language.eng.linkServices);

              linkRooms.forEach(linkRooms => linkRooms.textContent =
                language.eng.linkRooms);

                linkContacts.forEach(linkContacts => linkContacts.textContent =
                  language.eng.linkContacts);


            nameText.textContent =
            language.eng.nameText

            emailText.textContent =
            language.eng.emailText

            messageText.textContent =
            language.eng.messageText

            errorHintName.textContent =
            language.eng.errorHintName

            errorHintEmail.textContent =
            language.eng.errorHintEmail

            activeLanguage.src="img/united-kingdom.png";
            languageList.innerHTML = '<a href="#" onClick="changeLanguage(\'hr\')" class="hr"></a>'

          

        }
        else if (window.location.hash == "#hr") {
         
        }
      }