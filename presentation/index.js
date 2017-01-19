// Import React
import React from "react";

// Import Spectacle Core tags
import {
  Appear,
  BlockQuote,
  Cite,
  CodePane,
  Deck,
  Fit,
  Fill,
  Heading,
  Image,
  Layout,
  Link,
  ListItem,
  List,
  Markdown,
  Quote,
  Slide,
  Spectacle,
  Text
} from "spectacle";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Import custom component
import Interactive from "../assets/interactive";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");


const images = {
  city: require("../assets/city.jpg"),
  kat: require("../assets/kat.png"),
  logo: require("../assets/formidable-logo.svg"),
  markdown: require("../assets/markdown.png"),
  ghostbusters: require("../assets/2mm5zmA.gif"),
  techgirlwonder: require("../assets/techgirlwonder-01.png"),
  andMyAxe: require("../assets/13244947.jpg"),
  coding: require("../assets/code-944504_1280.jpg"),
  arrow: require("../assets/2000px-MUTCD_M6-1R.svg.png"),
  nonprofit: require("../assets/masters-hero-720x240.jpg"),
  genderJusticeLA: require("../assets/gjla.jpg"),
  vanguard: require("../assets/CheyFidel.jpg"),
  burnOut: require("../assets/Burnt_Out_Car_Beside_Calderside_Road_-_geograph.org.uk_-_96296.jpg"),
  dontFuckItUp: require("../assets/rupaul.gif")
};

preloader(images);

const theme = createTheme({
  primary: "#AC80C4",
  secondary: "black",
  tertiary: "#D3BB47"
});

const alignCenter = {
  alignItems: "center",
  height: "550px",
  marginTop: "40px"
}

const notes = {
  endJourney: `
     -- I've been on all sides of the tech and social justice, multiple times
     <br />-- my life is pretty split these days
  `,
  checkPrivilege: `
     -- thought about putting this at the end, cause it's hard and controversial
     <br />-- but feel it's almost a prerequisite to doing anything
  `,
  interviewStory: `
     -- I worked for a small company that folded
     -- in the month after folding we got "group interviewed" by a large tech company
     -- we were a pretty diverse group
     -- in the time after we discussed salaries
     -- and then right after I went to this trans feminist support group
     -- uber driving / multiple jobs / $11/hr, unemployment, mental health issues, not cheap enough therapy`,
  interviewStoryLessons: `
            <ul>
              <li>We are stratified</li>
              <li>Work Hard != Success</li>
              <li>Get outside your neighborhood</li>
              <li>Best contribution may be money</li>
            </ul>
  `,
  needsStories: `
     -- Class privilege - going to school, doing flash project, and paying no attention to hardware
     -- The Website Collaboration`,
  needsStoriesLessons: ` 
     <ul>
       <li>Understand the problem first</li>
       <li>You are not a subject expert.</li>
       <li>The problem is not lack of tech.</li>
       <li>Prefer Additive To Disruptive.</li>
    </ul>`,
  privacyStory: `
     - Vanguard paranoia
     - Running all communication off a wiki
     - SSL on website using self signed certificate`,
  privacyStoryLessons: `
     <ul>
        <li>Solutions Only Valuable If Used</li>
        <li>Don't Assume Expertise</li>
        <li>Don't Assume Hardware</li>
        <li>Don't Assume Access</li>
     </ul>     
  `,
  driveByTechTeam: `
    -- working in non profit
    -- got hours donated
    -- came in an set up
    -- insulted -- you can watch
    -- became the IT manager accidentally
  `,
  driveByTechTeamLessons: `

          <ul>
             <li>
               Stick Around And Finish The Job.
            </li>
            <li>
              Plan for Maintainence.
            </li>
            <li>
               Long-term Collaboration -> Real Success.
            <li>
        </ul>
  `,
  goodTech: `
     -- came into a tough situation
     -- spent a lot of time understanding the business needs
     -- had a PM
     -- sustained Commitment
     -- made exceptions
     -- followed up
     -- handed off

     privacy training:
        -- kept it simple
        -- kept it relevant
        -- had the relationships
        -- gave context and made appropriate for audience
  `,
  default: ''
}


export default class Presentation extends React.Component {
  render() {
    return (
      <Spectacle theme={theme}>
        <Deck transition={["zoom", "slide"]} transitionDuration={500}>
          <Slide transition={["zoom"]} bgColor="primary">
            <Heading size={1} fit caps lineHeight={1} textColor="secondary">
              Work Effectively
            </Heading>
            <Heading size={1} fit caps>
              In Social Justice
            </Heading>
            <Appear>
              <Heading size={1} fit caps textColor="secondary">
                A Guide For Techies
              </Heading>
            </Appear>
          </Slide>
          <Slide transition={["zoom", "fade"]} bgColor="primary" notes="">
            <Heading size={3} caps textColor="tertiary">
               Agenda
            </Heading>
            <List>
              <Appear><ListItem>Who am I?</ListItem></Appear>
              <Appear><ListItem>You have something to contribute!</ListItem></Appear>
              <Appear><ListItem>Understanding difference</ListItem></Appear>
              <Appear><ListItem>Listening to needs</ListItem></Appear>
              <Appear><ListItem>Adjusting Expectations</ListItem></Appear>
              <Appear><ListItem>Sustained Commitment</ListItem></Appear>
              <Appear><ListItem>Let's discuss!</ListItem></Appear>
            </List>
          </Slide>
          <Slide transition={["zoom", "fade"]} bgColor="primary" notes="">
            <Layout>
              <Fit>
                <Appear>
                  <Image src={images.techgirlwonder.replace("/", "")} height="700px" margin="0px 40px 0px 0px"/>
                </Appear>
              </Fit>
              <Fill>
                <Heading size={1} fit caps lineHeight={1}>
                  @techgirlwonder #AboutMe
                </Heading>
                <List>
                  <Appear><ListItem>Hannah Howard</ListItem></Appear>
                  <Appear><ListItem>hannah@carbonfive.com</ListItem></Appear>
                  <Appear><ListItem>Twitter above!</ListItem></Appear>
                </List>
              </Fill>
            </Layout>
          </Slide>
          <Slide transition={["slide"]} bgColor="black">
             <Heading size={1} fit caps lineHeight={1}>
                I started in tech...
            </Heading>
            <Layout style={alignCenter}>
              <Fill>
                  <Image src={images.coding.replace("/", "")} width="100%" display="block"/>
              </Fill>
              <Fit>
                 <Image align="center center" src={images.arrow.replace("/", "")} width="200px" margin="0px 0px 0px 100px" display="block"/>
              </Fit>
            </Layout>
          </Slide>
          <Slide transition={["slide"]} bgColor="black">
             <Heading size={1} fit caps lineHeight={1}>
                ...then worked in nonprofit...
            </Heading>
            <Layout style={alignCenter}>
              <Fill>
                  <Image src={images.nonprofit.replace("/", "")} width="100%" display="block"/>
              </Fill>
              <Fit>
                 <Image align="center center" src={images.arrow.replace("/", "")} width="200px" margin="0px 0px 0px 100px" display="block"/>
              </Fit>
            </Layout>
          </Slide>
          <Slide transition={["slide"]} bgColor="black">
             <Heading size={1} fit caps lineHeight={1}>
                ...then community organizing...
            </Heading>
            <Layout style={alignCenter}>
              <Fill>
                  <Image src={images.genderJusticeLA.replace("/", "")} height="600px" display="block"/>
              </Fill>
              <Fit>
                 <Image align="center center" src={images.arrow.replace("/", "")} width="200px" margin="0px 0px 0px 100px" display="block"/>
              </Fit>
            </Layout>
          </Slide>
          <Slide transition={["slide"]} bgColor="black">
             <Heading size={1} fit caps lineHeight={1}>
                ...then joined a vanguard...
            </Heading>
            <Layout style={alignCenter}>
              <Fill>
                  <Image src={images.vanguard.replace("/", "")} height="600px" display="block"/>
              </Fill>
              <Fit>
                 <Image align="center center" src={images.arrow.replace("/", "")} width="200px" margin="0px 0px 0px 100px" display="block"/>
              </Fit>
            </Layout>
          </Slide>
          <Slide transition={["slide"]} bgColor="black">
             <Heading size={1} fit caps lineHeight={1}>
                ...got burnt out...
            </Heading>
            <Layout style={alignCenter}>
              <Fill>
                  <Image src={images.burnOut.replace("/", "")} width="100%" display="block"/>
              </Fill>
              <Fit>
                 <Image align="center center" src={images.arrow.replace("/", "")} width="200px" margin="0px 0px 0px 100px" display="block"/>
              </Fit>
            </Layout>
          </Slide>
          <Slide transition={["slide"]} bgColor="black" notes={notes.endJourney}>
             <Heading size={1} fit caps lineHeight={1}>
                ...and ended up back in tech.
            </Heading>
            <Layout style={alignCenter}>
              <Fit>
                 <Image align="center center" src={images.arrow.replace("/", "")} width="200px" margin="0px 100px 0px 0px" display="block"/>
              </Fit>
              <Fill>
                  <Image src={images.coding.replace("/", "")} width="100%" display="block"/>
              </Fill>
            </Layout>
          </Slide>
          <Slide transition={["slide"]} bgColor="black">
            <Heading size={3} fit caps textColor="primary">
               So...
            </Heading>
          </Slide>
          <Slide transition={["slide"]} bgColor="black">
            <Heading size={2} caps fit textColor="primary" textFont="primary">
              #CurrentMood
            </Heading>
            <Image src={images.ghostbusters.replace("/", "")} width="900px" margin="40px auto 0px"/>
          </Slide>
          <Slide transition={["slide"]} bgColor="black">
            <Heading size={3} fit caps textColor="primary">
               Good News!
            </Heading>
          </Slide>
          <Slide transition={["slide"]} bgColor="black">
            <Heading size={3} caps textColor="primary">
               Techies can help with....
            </Heading>
            <List textColor="tertiary">
              <Appear><ListItem>Privacy</ListItem></Appear>
              <Appear><ListItem>Online Infrastructure</ListItem></Appear>
              <Appear><ListItem>Resources!</ListItem></Appear>
              <Appear><ListItem>Hardware!</ListItem></Appear>
              <Appear><ListItem>Hacking?</ListItem></Appear>
            </List>
          </Slide>
          <Slide transition={["slide"]} bgColor="black">
            <Heading size={1} fit caps textColor="primary">
               Everyone has a role to play
            </Heading>
            <Image src={images.andMyAxe.replace("/", "")} margin="100px auto 0px"/>
          </Slide>
          <Slide transition={["slide"]} bgColor="black">
            <Heading size={1} fit caps textColor="primary">
               We can do it well or...<br />not.
            </Heading>
            <Image src={images.dontFuckItUp.replace("/", "")} width="900px" margin="40px auto 0px"/>
          </Slide>
          <Slide transition={["zoom", "fade"]} bgColor="primary" notes={notes.checkPrivilege}>
            <Heading size={3} fit caps textColor="black">
               Understanding Difference
            </Heading>
          </Slide>
          <Slide transition={["slide"]} bgColor="black" notes={notes.interviewStory}>
            <Heading size={1} caps textColor="primary">
              Story: The Bizarre Interview And The Meeting After
            </Heading>
          </Slide>

          <Slide transition={["slide"]} bgColor="black" notes={notes.interviewStoryLessons}>
            <Heading size={1} fit caps textColor="primary">
               Lessons
            </Heading>
          </Slide>

          <Slide transition={["slide"]} bgColor="black" notes={notes.default}>
            <Heading size={1} caps textColor="primary">
               Learn Some Stuff
            </Heading>
            <Appear><Text caps textColor="tertiary">
               This is a big topic
            </Text></Appear>
            <Appear><Heading size={2} fit margin="20px 0px">
              <Link href="https://www.ashedryden.com/blog/the-101level-reader-books-to-help-you-better-understand-your-biases-and-the-lived-experiences">
                 Ashe Dryden Bias 101 Reading List
              </Link>
            </Heading></Appear>
            <Appear><Text caps textColor="tertiary">
               ...And Don't Miss...
            </Text></Appear>
            <Appear><List textColor="tertiary">
              <ListItem>Sister Outsider - Audre Lorde</ListItem>
              <ListItem>The New Jim Crow - Michelle Alexander</ListItem>
              <ListItem>Organizing for Social Change - Midwest Academy</ListItem>
              <ListItem>Race Matters - Cornel West</ListItem>
              </List>
              </Appear>
          </Slide>
          <Slide transition={["slide"]} bgColor="black" notes={notes.default}>
            <Heading size={1} caps textColor="primary">
               Give Away Money!
            </Heading>
            <Heading size={1} caps textColor="tertiary">
               Resource Generation
            </Heading>
            <Heading size={2} fit>
              <Link href="https://resourcegeneration.org/">https://resourcegeneration.org/</Link>
            </Heading>
          </Slide>
          
          <Slide transition={["zoom", "fade"]} bgColor="primary" notes={notes.default}>
            <Heading size={3} fit caps textColor="black">
               Listening To Needs
            </Heading>
          </Slide>
          
          <Slide transition={["slide"]} bgColor="black" notes={notes.needsStories}>
            <Heading size={1} caps textColor="primary">
              Many Stories Of Techies Not Paying Attention
            </Heading>
          </Slide>

          <Slide transition={["slide"]} bgColor="black" notes={notes.needsStoriesLessons}>
            <Heading size={1} fit caps textColor="primary">
               Lessons
            </Heading>
          </Slide>

          <Slide transition={["zoom", "fade"]} bgColor="primary" notes={notes.default}>
            <Heading size={3} fit caps textColor="black">
               Adjusting Expectations
            </Heading>
          </Slide>

          <Slide transition={["slide"]} bgColor="black" notes={notes.privacyStory}>
            <Heading size={1} caps textColor="primary">
              Story: The Privacy Solution That Wasn't
            </Heading>
          </Slide>

          <Slide transition={["slide"]} bgColor="black" notes={notes.privacyStoryLessons}>
            <Heading size={1} fit caps textColor="primary">
               Lessons
            </Heading>
          </Slide>

          <Slide transition={["zoom", "fade"]} bgColor="primary" notes={notes.default}>
            <Heading size={3} fit caps textColor="black">
               Sustained Commitment
            </Heading>
          </Slide>

          <Slide transition={["slide"]} bgColor="black" notes={notes.driveByTechTeam}>
            <Heading size={1} caps textColor="primary">
              Story: The Drive-By Tech Team
            </Heading>
          </Slide>

          <Slide transition={["slide"]} bgColor="black" notes={notes.driveByTechTeam}>
            <Heading size={1} fit caps textColor="primary">
               Lessons
            </Heading>
          </Slide>

          <Slide transition={["slide"]} bgColor="black" notes={notes.goodTech}>
            <Heading size={1} caps textColor="primary">
               A Couple Successful Tech Stories
            </Heading>
          </Slide>

          <Slide transition={["spin", "slide"]} bgColor="tertiary">
            <Heading size={1} caps fit lineHeight={1.5} textColor="primary">
              Let's Discuss.
            </Heading>
          </Slide>
          <Slide transition={["spin", "slide"]} bgColor="tertiary">
            <Heading size={1} caps fit lineHeight={1.5} textColor="black">
              The End
            </Heading>
            <Link href="http://socialjusticetech-presentation.techgirlwonder.com">
               http://socialjusticetech-presentation.techgirlwonder.com
            </Link>
          </Slide>
        </Deck>
      </Spectacle>
    );
  }
}
