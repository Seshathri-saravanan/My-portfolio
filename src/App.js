import './App.css';
import {Grid, Typography, makeStyles, Paper,ListItem,Button, ListItemText} from "@material-ui/core";
const useStyles= makeStyles((theme)=>({
  root:{
    padding:"50px",
  },
  container:{
    borderBottom:"2px solid gray",
    padding:"30px",
  },
  subheading:{
    display:"block",
    fontSize:"1.8rem",
    fontWeight:"bolder",
    padding:"10px"
  },
  text:{
    display:"block",
    fontSize:"1.5rem",
    padding:"10px"
  },
  paper:{
    padding:"20px",
    position:"fixed",
    top:"10%",
  }
}))

function App() {
  const classes = useStyles();
  return (
    <Grid container className={classes.root}>
      <Grid container item xs={2} justifyContent={"flex-start"} alignContent={"flex-start"} >
        <Paper className={classes.paper}>
          <Typography variant={"h5"}>Navigation</Typography>
          <ListItem button component="a" href={"#education"} ><ListItemText  primary="Education" /></ListItem>
          <ListItem button component="a" href={"#experience"} ><ListItemText  primary="Experience" /></ListItem>
          <ListItem button component="a" href={"#technicalskills"} ><ListItemText  primary="Technical skills" /></ListItem>
          <ListItem button component="a" href={"#projects"} ><ListItemText  primary="Projects" /></ListItem>
          <ListItem button component="a" href={"#achievements"} ><ListItemText  primary="Achievements" /></ListItem>
          <ListItem button component="a" href={"#certifications"} ><ListItemText  primary="Certifications" /></ListItem>
          <ListItem button component="a" href={"#activities"} ><ListItemText  primary="Activities" /></ListItem>
        </Paper>
      </Grid>
      <Grid container item xs={10}>
      
        <Grid item className={classes.container} xs={12}>
          <Typography variant={"h2"}>Seshathri S</Typography>
        </Grid>
        <Grid container item className={classes.container} xs={12}>
          <Grid container xs={12}>
            <Typography variant={"h3"} id={"education"}>Education</Typography>
          </Grid>
          <Grid container xs={8}>
            <Typography className={classes.text}>Indian Institute of Information Technology,Kottayam</Typography>
            <Typography className={classes.text}>B.Tech in Computer science and engineering</Typography>
          </Grid>
          <Grid container xs={4}>
            <Typography className={classes.text}>2019 - 2023</Typography>  
            <Typography className={classes.text}>CGPA : 8.8/10</Typography>
          </Grid>
        </Grid>
        <Grid item className={classes.container} xs={12}>
          <Typography variant={"h3"} id={"experience"}>Experience</Typography>
          <Typography className={classes.subheading}>
                  Slatemates - SDE Intern  (Aug 2020 - July 2021)
          </Typography>
          <Typography className={classes.text}>
          Developed the website of the company using next.js
          Developed a platform for teaching which includes whiteboard, video conference, etc
          Developed the front-end of the web application
          used for booking classes.And integrated it with the backend.
          Tested and documented the API’s.

          </Typography>
        </Grid>
        <Grid item className={classes.container} xs={12}>
          <Typography variant={"h3"} id={"technicalskills"}>Technical skills</Typography>
          <Typography className={classes.text}>
              C++, Java, Python, HTML, CSS, Javascript, SQL 
              React.js, Git, Node.js, MongoDB, Redux, Express.js
          </Typography>
        </Grid>
        <Grid item className={classes.container} xs={12}>
          <Typography variant={"h3"} id={"projects"}>Projects</Typography>
          <Typography className={classes.subheading}>Chat application(Quick-chat)
          </Typography>
          <Typography className={classes.text}>
            Real-time application developed using Socket.io
            Implemented based on client-server model
            Used React.js,material-ui for the front-end client application
            Used Node.js, Express.js for the back end server application and MongoDB for database.
            Deployed it in heroku.
        </Typography>
        </Grid>
        <Grid item className={classes.container} xs={12}>
          <Typography variant={"h3"} id={"certifications"}>Certifications</Typography>
          <Typography className={classes.text}>
          Completed “Algorithm toolbox” online course authorised by UC san diego from Coursera
          </Typography>
          <Typography className={classes.text}>
            Completed “Introduction to discrete mathematics for computer science” specialisation which consists of 5 courses from coursera.
          </Typography>
          <Typography className={classes.text}>
            Completed “Google IT automation with python” professional course from coursera.
          </Typography>
        </Grid>
        <Grid item className={classes.container} xs={12}>
          <Typography variant={"h3"} id={"achievements"}>Achievements</Typography>
          <Typography className={classes.subheading}>
          Google kickstart Round C 2021
          </Typography>
          <Typography className={classes.text}>
            Secured 817th rank globally out of 12000 participants in Google kickstart round C 2021
            Codeforces
          </Typography>
          <Typography className={classes.subheading}>Codeforces</Typography>
          <Typography className={classes.text}>Rated Specialist on Codeforces with maximum rating 1493 (Handle:seshathris2001)
          </Typography>
          <Typography className={classes.subheading}>Codechef</Typography>
          <Typography className={classes.text}>Rated 4 stars in Codechef with maximum rating 1932 (Handle:seshathri2001)
          </Typography>
          <Typography className={classes.subheading}>Techsemble</Typography>
          <Typography className={classes.text}>Secured 1st rank in GNIDOC(a reverse coding contest) during TECHSEMBLE organised by  IEEE Student Branch of IIIT Kottayam 
          </Typography>
          <Typography className={classes.subheading}>ICPC 2019 India chennai provincial contest</Typography>
          <Typography className={classes.text}>Secured 20th place in ICPC 2019 india chennai provincial contest
          </Typography>

        </Grid>
        <Grid item className={classes.container} xs={12}>
          <Typography variant={"h3"} id={"activities"}>Activities</Typography>
          <Typography className={classes.subheading}>
          Google kickstart Round C 2021
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default App;
