/*jshint esversion: 6 */
// Include the UserVoice JavaScript SDK (only needed once on a page)
UserVoice = window.UserVoice || [];
(() => {
  const uv = document.createElement('script');
  uv.type = 'text/javascript';
  uv.async = true;
  uv.src = 'https://widget.uservoice.com/JiikDXKbOTnsLa4BcFRGFg.js';
  let s = document.getElementsByTagName('script')[0];
  s.parentNode.insertBefore(uv,s);
})();

/**********************************************************
* Load Widget Modes
* 
* Load widget experiences
* sdk       : load the widget sdk settings
* postIdea  : post idea widget
* nps       : nps widget
* smartvote : smartvote widget
**********************************************************/
const loadWidget = {
  sdk: () => {
    // Settings
    UserVoice.push(['set', {
      // Options can also be set on specific widgets instead of globally
      accent_color             : '#706993', // Widget accent color
      trigger_color            : 'white',   // Trigger symbol color
      trigger_background_color : '#9cb7d8', // Trigger Background color
      //locale                   : 'en',      // Defaults to your account’s localization
      forum_id                 : '589399',  // Defaults to your account’s default forum
      smartvote_enabled        : true,     // Enables Smartvote
      post_suggestion_enabled  : true,      // Ability to post an Idea/Suggestion
      contact_enabled          : false,     // Ability to post a Ticket
      screenshot_enabled       : true,      // Take a screenshot
      permalinks_enabled       : true,      // Disable web portal permalinks to suggestions and articles when viewing Instant Answer results
      //__org_name             : 'Org Name',// Undocumented value for changing the Org Name in the NPS question
      //height                 : '400px',   // Widget height
      //width                  : '300px',    // Widget width
      //position               : 'left',    // Popover position in relation to the trigger
      //ticket_custom_fields   : {},        // Custom Fields
      //Customize widget text
      strings: {
        /* Posting a Suggestion
        post_suggestion_title: 'Tell us what you think',
        post_suggestion_body: 'Do you feel this product is ready to move out of a Beta state?',
        post_suggestion_message_placeholder: 'Yes/No/This is what I think...',
        post_suggestion_skip_instant_answers_button: 'Skip and post idea',
        post_suggestion_details_title: 'Additional details',
        suggestion_title_label: 'Idea title',
        suggestion_title_placeholder: 'Summarize your suggestion',
        suggestion_category_label: 'Category',
        post_suggestion_submit_button: 'Post idea',
        post_suggestion_success_title: 'Thank you!',
        post_suggestion_success_body: 'Your feedback has been posted to our %{link:feedback forum}.',
        // SmartVote
        smartvote_menu_label: 'Help us decide what to add next',
        smartvote_title: 'What should we add next?',
        post_suggestion_menu_label: 'Post your own idea',
        smartvote_pick_button: 'Pick',
        smartvote_subscribe_button: 'Pick + Subscribe',
        suggestion_subscribe_title: 'Great stuff!',
        suggestion_subscribe_body: 'Do you want updates about this idea?',
        suggestion_subscribed_body: 'We’ll update you as this idea progresses.',
        smartvote_success_title: 'Your pick',
        /* NPS/Satisfaction
        satisfaction_message_title: 'Why did you pick that score?',
        satisfaction_message_placeholder: 'Enter your feedback',
        satisfaction_success_title: 'Thank you!',
        satisfaction_success_body: 'We take your feedback to heart.',
        */
        //__org_name: 'Cheese Factory', // Undocumented value for changing the Org Name in the NPS question
        /*// Instant Answers
        instant_answers_title: 'Are any of these helpful?',
        instant_answers_related_articles_label: 'Related articles',
        instant_answers_related_suggestions_label: 'Related ideas',
        article_pick_button: 'This answers my question',
        suggestion_subscribe_button: 'I want this!',
        contact_confirm_title: 'Awesome!!!',
        contact_confirm_body: 'Do you still want to send us a message?',
        post_suggestion_confirm_title: 'Okay.',
        post_suggestion_confirm_body: 'Do you still want to submit an idea?',
        instant_answers_success_title: 'Thank you!',
        instant_answers_success_body: 'We take your feedback to heart.',
        // Contact
        contact_menu_label: 'Report a Bug',
        contact_title: 'TEST TEXT',
        contact_message_placeholder: 'Did you like the vote, would you like to give more feedback?',
        contact_skip_instant_answers_button: 'Skip and send message',
        contact_details_title: 'Additional details',
        contact_submit_button: 'Send message',
        contact_success_title: 'Message sent!',
        contact_success_body: 'We’ll be in touch.',
        // Misc 
        email_address_label: 'Your email address',
        email_address_placeholder: 'Email address',
        */
      }
    }]);
  },
  postIdea: () => {
    UserVoice.push(['addTrigger', {
      mode: 'post_idea',
      trigger_position: 'bottom-right'
    }]);
  },
  nps: () => {
    UserVoice.push(['addTrigger', {
      mode: 'satisfaction',
      trigger_position: 'bottom-right'
    }]);
  },
  smartvote: () => {
    UserVoice.push(['addTrigger', {
      mode: 'smartvote',
      trigger_position: 'bottom-right'
    }]);
  },
  init: () => {
    loadWidget.sdk(); // Load SDK
    if (/mode=nps/.test(window.location.href)) {
      loadWidget.nps(); // NPS
    } else if (/mode=smartvote/.test(window.location.href)){
      loadWidget.smartvote(); // SmartVote
    } else {
      loadWidget.postIdea(); // Post Idea
    }
  }
};
loadWidget.init();














