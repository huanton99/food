import React from 'react';
import ReactDOM from 'react-dom';
import MessengerCustomerChat from 'react-messenger-customer-chat';

const ChatBox = (props) => {
    return (
        <MessengerCustomerChat
        pageId="<PAGE_ID>"
        appId="<APP_ID>"
        htmlRef="<REF_STRING>"
      />
    );
  };
  
  export default ChatBox;
  