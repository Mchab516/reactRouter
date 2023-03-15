import React from 'react'

const Contact = () => {
  return (
    <div>
      <div id="after_submit"></div>

  <div class="row">
  <h1 className="text-center text-warning my-5">Contactez-Nous</h1>
    <label class="required" for="name">Your name:</label><br />
    <input id="name" class="input" name="name" type="text" value="" size="30" /><br />
    <span id="name_validation" class="error_message"></span>
  </div>
  <div class="row">
    <label class="required" for="email">Your email:</label><br />
    <input id="email" class="input" name="email" type="text" value="" size="30" /><br />
    <span id="email_validation" class="error_message"></span>
  </div>
  <div class="row">
    <label class="required" for="message">Your message:</label><br />
    <textarea id="message" class="input" name="message" rows="7" cols="30"></textarea><br />
    <span id="message_validation" class="error_message"></span>
  </div>
  
    
    <input id="submit_button" type="submit" value="Send email" class="btn btn-warning" />

    </div>
  )
}

export default Contact;
