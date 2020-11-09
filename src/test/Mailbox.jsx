import React from 'react';

// function Mailbox(props) {
//     const unreadMessages = props.unreadMessages;
    
//     return (
//         <div>
//             <h1>Hello</h1>
//             {unreadMessages.length > 0 &&
//                 <h2>
//                     You habe {unreadMessages.length} unread messages.
//                 </h2>
//             }
//         </div>
//     );
// }

function Mailbox() {
    const count = 0;
    return(
        <div>
            {count && <h1>Messages: {count}</h1>}
        </div>
    )
}

export default Mailbox;