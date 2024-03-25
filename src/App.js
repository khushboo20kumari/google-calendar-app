// import './App.css';
// import DateTimePicker from 'react-datetime-picker';
// import { useSupabaseClient, useSession, useSessionContext } from '@supabase/auth-helpers-react';
// import { useState } from 'react';
// import { TextField, Typography } from '@mui/material'; 
// function App() {
//   const session = useSession();
//   const supabase = useSupabaseClient();
//   const [start, setStart] = useState(new Date());
//   const [end, setEnd] = useState(new Date());
//   const [event, setEvent] = useState("");
//   const [description, setDescription] = useState("");
//   const [recipientEmail, setRecipientEmail] = useState("");
//   const { isLoading } = useSessionContext();

//   if (isLoading) {
//     return null;
//   }

//   async function googleSignIn() {
//     const { error } = await supabase.auth.signInWithOAuth({
//       provider: "google",
//       options: {
//         scopes: "https://www.googleapis.com/auth/calendar"
//       }
//     });
//     if (error) {
//       alert("Error logging in");
//     }
//   }

//   async function googleSignInOut() {
//     await supabase.auth.signOut();
//   }

//   async function CreateCalendarEvent() {
//     const eventObject = {
//       "summary": event,
//       "description": description,
//       "start": {
//         "dateTime": start.toISOString(),
//         "timeZone": Intl.DateTimeFormat().resolvedOptions().timeZone
//       },
//       "end": {
//         "dateTime": end.toISOString(),
//         "timeZone": Intl.DateTimeFormat().resolvedOptions().timeZone
//       },
//       "attendees": [
//         { "email": recipientEmail}
//       ]
//     };
//     await fetch("https://www.googleapis.com/calendar/v3/calendars/primary/events", {
//       method: "POST",
//       headers: {
//         "Authorization": "Bearer " + session.provider_token
//       },
//       body: JSON.stringify(eventObject)
//     }).then((response) => {
//       if (response.ok) {
//         return response.json();
//       } else {
//         throw new Error('Failed to create event');
//       }
//     }).then((data) => {
//       console.log(data);
//       alert("Event Created, check your Google Calendar");
//     }).catch((error) => {
//       console.error('Error creating event:', error);
//       alert("Failed to create event. Please try again later.");
//     });
//   }

//   return (
//     <div className="App">
//       {session ?
//         <>
//           <h1>Hey there {session.user.email}</h1>
//           <div className="date-time-picker">
//             <Typography variant="h6">Event Start</Typography>
//             <DateTimePicker onChange={setStart} value={start} />
//           </div>
//           <div className="date-time-picker">
//             <Typography variant="h6">Event End</Typography>
//             <DateTimePicker onChange={setEnd} value={end} />
//           </div>
//           <TextField onChange={(e) => setEvent(e.target.value)} value={event} label="Event Name" />
//           <TextField onChange={(e) => setDescription(e.target.value)} value={description} label="Description" multiline />
//           <TextField onChange={(e) => setRecipientEmail(e.target.value)} value={recipientEmail} label="Recipient Email" />
//           <button onClick={() => CreateCalendarEvent()} className="Create-Calendar">Create Calendar Event</button>
//           <button onClick={() => googleSignInOut()} className="login-with-google-btn">Sign out from Google</button>
//         </>
//         :
//         <>
//           <button onClick={() => googleSignIn()} className="login-with-google-btn">Sign in with Google</button>
//         </>
//       }
//     </div>
//   );
// }

// export default App;




// import './App.css';
// import DateTimePicker from 'react-datetime-picker';
// import { useSupabaseClient, useSession, useSessionContext } from '@supabase/auth-helpers-react';
// import { useState } from 'react';
// import { TextField, Typography } from '@mui/material';
// function App() {
//   const session = useSession();
//   const supabase = useSupabaseClient();
//   const [start, setStart] = useState(new Date());
//   const [end, setEnd] = useState(new Date());
//   const [event, setEvent] = useState("");
//   const [description, setDescription] = useState("");
//   const [recipientEmail, setRecipientEmail] = useState("");
//   const { isLoading } = useSessionContext();
//   const [add, setAdd] = useState([])
//   if (isLoading) {
//     return null;
//   }

//   async function googleSignIn() {
//     const { error } = await supabase.auth.signInWithOAuth({
//       provider: "google",
//       options: {
//         scopes: "https://www.googleapis.com/auth/calendar"
//       }
//     });
//     if (error) {
//       alert("Error logging in");
//     }
//   }

//   async function googleSignInOut() {
//     await supabase.auth.signOut();
//   }

//   async function CreateCalendarEvent() {
//     const eventObject = {
//       "summary": event,
//       "description": description,
//       "start": {
//         "dateTime": start.toISOString(),
//         "timeZone": Intl.DateTimeFormat().resolvedOptions().timeZone
//       },
//       "end": {
//         "dateTime": end.toISOString(),
//         "timeZone": Intl.DateTimeFormat().resolvedOptions().timeZone
//       },
//       "attendees": add.map(email => ({ "email": email })) // Mapping email addresses to attendees
//     };

//     await fetch("https://www.googleapis.com/calendar/v3/calendars/primary/events", {
//       method: "POST",
//       headers: {
//         "Authorization": "Bearer " + session.provider_token
//       },
//       body: JSON.stringify(eventObject)
//     }).then((response) => {
//       if (response.ok) {
//         return response.json();
//       } else {
//         throw new Error('Failed to create event');
//       }
//     }).then((data) => {
//       console.log(data);
//       alert("Event Created, check your Google Calendar");
//     }).catch((error) => {
//       console.error('Error creating event:', error);
//       alert("Failed to create event. Please try again later.");
//     });
//   }
//   return (
//     <div className="App">
//       {session ?
//         <>
//           <h1>Hey there {session.user.email}</h1>
//           <div className="date-time-picker">
//             <Typography variant="h6">Event Start</Typography>
//             <DateTimePicker onChange={setStart} value={start} />
//           </div>
//           <div className="date-time-picker">
//             <Typography variant="h6">Event End</Typography>
//             <DateTimePicker onChange={setEnd} value={end} />
//           </div>
//           <TextField onChange={(e) => setEvent(e.target.value)} value={event} label="Event Name" />
//           <TextField onChange={(e) => setDescription(e.target.value)} value={description} label="Description" multiline />
//           <TextField onChange={(e) => setRecipientEmail(e.target.value)} value={recipientEmail} label="Recipient Email" />
//           <button onClick={() => CreateCalendarEvent()} className="Create-Calendar">Create Calendar Event</button>
//           <button className='' onClick={HandlerButton}>Add</button>
//           <button onClick={() => googleSignInOut()} className="login-with-google-btn">Sign out from Google</button>
//         </>
//         :
//         <>
//           <button onClick={() => googleSignIn()} className="login-with-google-btn">Sign in with Google</button>
//         </>
//       }
//     </div>
//   );
// }

// export default App;


import React from 'react';
import './App.css';
import DateTimePicker from 'react-datetime-picker';
import { useSupabaseClient, useSession, useSessionContext } from '@supabase/auth-helpers-react';
import { useState } from 'react';
import { TextField, Typography, Grid, Button, Avatar, Tooltip, Card, CardContent } from '@mui/material';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
// import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
// import Tooltip from '@mui/material/Tooltip';
import Paper from '@mui/material/Paper';
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

function App() {
  const session = useSession();
  const supabase = useSupabaseClient();
  const [start, setStart] = useState(new Date());
  const [end, setEnd] = useState(new Date());
  const [event, setEvent] = useState("");
  const [description, setDescription] = useState("");
  const [recipientEmail, setRecipientEmail] = useState("");
  const [attendees, setAttendees] = useState([]);
  const { isLoading } = useSessionContext();

  if (isLoading) {
    return null;
  }

  async function googleSignIn() {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        scopes: "https://www.googleapis.com/auth/calendar"
      }
    });
    if (error) {
      alert("Error logging in");
    }
  }

  async function googleSignInOut() {
    await supabase.auth.signOut();
  }

  async function CreateCalendarEvent() {
    const eventObject = {
      "summary": event,
      "description": description,
      "start": {
        "dateTime": start.toISOString(),
        "timeZone": Intl.DateTimeFormat().resolvedOptions().timeZone
      },
      "end": {
        "dateTime": end.toISOString(),
        "timeZone": Intl.DateTimeFormat().resolvedOptions().timeZone
      },
      "attendees": attendees.map(email => ({ "email": email }))
    };

    await fetch("https://www.googleapis.com/calendar/v3/calendars/primary/events", {
      method: "POST",
      headers: {
        "Authorization": "Bearer " + session.provider_token
      },
      body: JSON.stringify(eventObject)
    }).then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error('Failed to create event');
      }
    }).then((data) => {
      console.log(data);
      alert("Event Created, check your Google Calendar");
    }).catch((error) => {
      console.error('Error creating event:', error);
      alert("Failed to create event. Please try again later.");
    });
  }

  const handleAddRecipient = () => {
    setAttendees([...attendees, recipientEmail]);
    setRecipientEmail('');
  }

  return (
    <div className="App">
      {session ?
        <>
          <Grid container spacing={1} style={{ margin: "0 auto" }}>
            <Grid item xs={12} md={10} sm={10} lg={10} >
              <Typography gutterBottom variant="h3" align="center">
              </Typography>
              <Grid>
                <Card  style={{ maxWidth: 600, padding: "20px 5px", margin: "0 auto",height:"600px",	background: "lightblue",color:"black",boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px"}}>
                  <CardContent className='form'>

                    <form className=''>
                      <Typography gutterBottom variant="h5" align="center" style={{fontSize:"30px", marginTop: "20px", position: "relative", bottom: "30px" ,fontWeight:"bold"}}>
                        Google Calendar Events
                      </Typography>
                      <Grid container spacing={1}>
                        <Grid xs={12} sm={12} item>
                          <DateTimePicker onChange={setStart} value={start} />
                        </Grid>
                        <Grid xs={12} sm={12} item>
                          <DateTimePicker onChange={setEnd} value={end} />
                        </Grid>
                        <Grid item xs={12}>
                          <TextField
                            onChange={(e) => setEvent(e.target.value)}
                            value={event}
                            label="Event Name"
                            fullWidth
                          />
                        </Grid>
                        <Grid item xs={12}>
                          <TextField
                            onChange={(e) => setDescription(e.target.value)}
                            value={description}
                            label="Description"
                            fullWidth

                          />
                        </Grid>
                        <Grid item xs={12}>
                          <TextField
                            onChange={(e) => setRecipientEmail(e.target.value)}
                            value={recipientEmail}
                            label="Recipient Email"
                            fullWidth
                          />
                        </Grid>
                        <Grid item xs={12}>
                          <Button variant="contained" color="primary" onClick={handleAddRecipient} fullWidth>
                            Add Recipient
                          </Button>

                        </Grid>
                        <Grid item xs={12}>
                          <Button variant='contained' onClick={() => CreateCalendarEvent()} fullWidth>Create Calendar Event</Button>
                        </Grid>
                        <Grid item xs={12}>
                          <Button className='login-with-google-btn' variant="contained" color="secondary" onClick={() => googleSignInOut()} fullWidth>
                            Sign out from Google
                          </Button>
                        </Grid>

                      </Grid>
                    </form>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </Grid>
        </>
        :
        <>
          <Box>

            <Grid>
              <Card style={{ maxWidth: 500, padding: "20px 5px", margin: "0 auto" ,boxShadow:"rgba(0, 0, 0, 0.35) 0px 5px 15px",position:"relative",bottom:"60px"}}>
                <CardContent>
                  <form style={{height:"350px"}}>
                    <Grid container justifyContent="center" alignItems="center" spacing={2}>
                      <Grid item>
                        <Avatar style={{ width: "60px", height: "60px" }} alt="Avatar" src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/120px-Google_%22G%22_logo.svg.png?20230822192911" />
                      </Grid>
                    </Grid>
                    <Typography gutterBottom variant="h5" align="center" style={{ marginTop: "10px" ,fontWeight:"bold"}}>
                      Sign In With Google
                    </Typography>
                    <Grid container spacing={1}>
                      <Grid item xs={12}>
                        <Button fullWidth onClick={() => googleSignIn()} className="login-with-google-btn" style={{ width: "100%", marginTop: "30px" }}>Sign in with Google</Button>
                      </Grid>
                      <Grid item xs={12}>
                        <Button style={{ borderRadius: "100px", background: "blue", marginTop: "30px", color: "white" }} fullWidth >Sign in with Google</Button>
                      </Grid>
                    </Grid>
                  </form>
                </CardContent>
              </Card>
            </Grid>
          </Box>
        </>
      }
    </div>
  );
}

export default App;
