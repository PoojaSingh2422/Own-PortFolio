import { Grid, Container, Typography, Box, Button, Card } from '@mui/material';
import DownloadIcon from '@mui/icons-material/Download';
import YouTubeIcon from '@mui/icons-material/YouTube';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import EmojiPeopleIcon from '@mui/icons-material/EmojiPeople';
import Typical from 'react-typical';
import account from '../_mock/account';
import Page from '../components/Page';
import { AppWidgetSummary } from '../sections/@dashboard/app';
import myphoto from '../image/IMG20220101121021.jpg';
import Resume from './resume.pdf';

export default function DashboardApp() {
  return (
    <Page title="Dashboard">
      <Container maxWidth="xl">
        <Typography variant="h4" sx={{ mb: 1 }}>
          Hy! I Am Satyendra Singh<span className="wavehand">👋</span>
        </Typography>
        <Typography style={{ color: 'red' }} variant="h6" sx={{ mb: 2 }}>
          We The Web Developer
        </Typography>
        <Typography variant="body2" sx={{ mb: 2 }}>
          <span style={{ color: 'blue' }}>https://www.satyendrapoojarajpoot.in</span> website is all about creativity
          and innovative work in the field of Technology. We provide web development courses videos, MCS important
          videos and technology videos and articles. You will get all of my youtube videos source code and you are free
          to use it and make changes. Please give us your valuable feedback and suggestions. We appreciate your opinions
          and will use it to evaluate changes and make improvements on our blog
        </Typography>
        <Box sx={{ mb: 3 }}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6} md={6}>
              <Typography sx={{ mb: 3 }} variant="body2">
                My name is satyendra Singh Rajpoot. I'm 24years old. I born in Banda, Uttar Pradesh. Currently, I am
                living in Bengalore, India. In my family, I live with my papa, mummy and two cute sister, her name is
                Namrta Singh,Amrta Singh . I am thankful to God that he gives me such a wonderful family. I am working
                as a web developer and I am a Youtuber too. I want to share with you my experiences during Colleges, as
                Web developers and the problems I faced, the solutions I found and the places I went to. I hope my blog
                will guide you, and give you the knowledge that you are looking to.
              </Typography>

              <a style={{ textDecoration: 'none' }} href="https://www.youtube.com/watch?v=OXWCzLpcGN4">
                <Button
                  style={{ margin: '5px' }}
                  to="/"
                  size="large"
                  color="warning"
                  variant="contained"
                  startIcon={<YouTubeIcon />}
                >
                  Go to Youtube
                </Button>
              </a>
              <a style={{ textDecoration: 'none' }} href={Resume} download>
                <Button size="large" color="warning" variant="contained" startIcon={<DownloadIcon />}>
                  Download CV
                </Button>
              </a>
            </Grid>
            <Grid item xs={12} sm={6} md={6}>
              <Box className="blur" style={{ display: 'flex', justifyContent: 'center', padding: '10px' }}>
                <img id="mypro" src={myphoto} alt="myimg" />
              </Box>
              <Box style={{ display: 'flex', justifyContent: 'center' }}>
                <Typography variant="h6">
                  <Typical
                    steps={[
                      'React developer',
                      2000,
                      'Full Stack Web and mobile development',
                      2000,
                      'Buliding Rest API',
                      2000,
                      'Mern stack developer',
                      2000,
                      'Managing database',
                      2000,
                    ]}
                    loop={Infinity}
                    wrapper="p"
                  />
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Box>
        <Box style={{ display: 'flex', justifyContent: 'center' }}>
          <Typography className="about" variant="h6" sx={{ mb: 5 }}>
            About Me
          </Typography>
        </Box>
        <Card>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6} md={6}>
              <Box style={{ marginTop: '15px' }} sx={{ mb: 5, mx: 2.5 }}>
                <Box className="blur" style={{ display: 'flex', justifyContent: 'center', padding: '10px' }}>
                  <img
                    style={{ width: '400px', height: '50vh', textAlign: 'center' }}
                    src={account.myprofile}
                    alt="myimg"
                  />
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={6}>
              <Box style={{ marginTop: '15px' }} sx={{ mb: 5, mx: 2.5 }}>
                <Typography variant="body2" sx={{ mb: 5 }}>
                  A passionate Full Stack Software Developer 🚀 having a special interest in Frontend technologies and
                  experience of building Web applications with JavaScript / Reactjs / Nodejs and some other tool
                  libraries and frameworks.
                </Typography>
                <Typography variant="h5" sx={{ mb: 3 }}>
                  Here are a few Highlights:
                </Typography>
                <div style={{ marginLeft: '15px', margin: '15px' }}>
                  <ul style={{ fontSize: '13px' }}>
                    <li>Full Stack Wev and mobile development</li>
                    <li>Interactive Front End as per the Design</li>
                    <li>React and React Native</li>
                    <li>Buliding Rest API</li>
                    <li>Managing database</li>
                  </ul>
                </div>
                <a style={{ textDecoration: 'none' }} href="https://www.youtube.com/watch?v=OXWCzLpcGN4">
                  <Button
                    style={{ margin: '5px' }}
                    to="/"
                    size="large"
                    color="warning"
                    variant="contained"
                    startIcon={<EmojiPeopleIcon />}
                  >
                    Hire Me
                  </Button>
                </a>
                <a style={{ textDecoration: 'none' }} href={Resume} download>
                  <Button size="large" color="warning" variant="contained" startIcon={<PictureAsPdfIcon />}>
                    Get Resume
                  </Button>
                </a>
              </Box>
            </Grid>
          </Grid>
        </Card>
        <br />
        <br />
        <Box style={{ display: 'flex', justifyContent: 'center' }}>
          <Typography className="about" variant="h6" sx={{ mb: 5 }}>
            What Do We Offer
          </Typography>
        </Box>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={3}>
            <AppWidgetSummary title="Cloud Developer" icon={'vscode-icons:file-type-aws'} />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <AppWidgetSummary title="SEO Maintan" color="info" icon={'icon-park-solid:seo'} />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <AppWidgetSummary title="DNS Configration" color="warning" icon={'eos-icons:dns'} />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <AppWidgetSummary title="React Developer" color="error" icon={'vscode-icons:file-type-preact'} />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <AppWidgetSummary title="DataBase Supporting" color="gray" icon={'logos:mongodb-icon'} />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <AppWidgetSummary title="Api Intigration" color="secondary" icon={'tabler:api'} />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <AppWidgetSummary title="Mobile Responsive Support" color="yellow" icon={'ant-design:mobile-filled'} />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <AppWidgetSummary title="Linux Developer" color="pink2" icon={'vscode-icons:folder-type-linux-opened'} />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <AppWidgetSummary title="Java Developer" color="pink" icon={'vscode-icons:file-type-java'} />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <AppWidgetSummary title="Website" color="gray" icon={'el:website-alt'} />
          </Grid>
        </Grid>
      </Container>
    </Page>
  );
}
