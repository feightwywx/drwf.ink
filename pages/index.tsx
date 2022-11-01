import {
  createM3Palette,
  NavigationRailItem,
  unstable_createMaterialDesign3Theme,
} from "@dotdirewolf/mui-m3-theme";
import { CssBaseline, ThemeProvider, Container, Typography, Link, Stack, Grid } from "@mui/material";
import { NavigationRail } from "@dotdirewolf/mui-m3-theme";
import React from 'react';
import HomeIcon from '@mui/icons-material/Home';
import BookOutlinedIcon from '@mui/icons-material/BookOutlined';
import AutoAwesomeOutlinedIcon from '@mui/icons-material/AutoAwesomeOutlined';
import headbg from '../public/nathan-duck-Jo5FUEkhB_4-unsplash.jpg';
import avatar from '../public/avatar.png';
import Image from 'next/image';
import { useRouter } from "next/router";

export default function Home() {
  const m3Palette = createM3Palette({ r: 254, g: 80, b: 0, a: 1 });
  const theme = unstable_createMaterialDesign3Theme(m3Palette);
  const router = useRouter();

  return (
    <div>
      <ThemeProvider theme={theme}>
        <CssBaseline />

        <NavigationRail>
          <div style={{ height: '80px' }} />
          <NavigationRailItem icon={<HomeIcon />} label='首页' selected />
          <NavigationRailItem icon={<BookOutlinedIcon />} label='Blog' onClick={() => { router.push('https://direcore.xyz') }} />
        </NavigationRail>
        <div style={{
          marginLeft: '80px',
          marginBottom: '80px',
          padding: '8px'
        }}>
          <Stack spacing={8}>
            <div
              style={{
                width: 'auto',
                backgroundColor: theme.palette.surface.variant,
                padding: '20vh 5%',
                maxHeight: '60vw',
                borderRadius: '28px',
                backgroundImage: `url(${headbg.src})`,
                backgroundSize: 'cover',
              }}>
              <Typography variant="h1" color={theme.palette.surface.variant} style={{
                fontWeight: 600,
                fontFamily: 'Manrope',
                textOverflow: 'clip'
              }}>
                drwf.ink
              </Typography>
              <Typography variant="h5" color={theme.palette.surface.variant} style={{
                fontWeight: 400,
              }}>
                {'=> drasitc rough wonderland fox.ink'}
              </Typography>

            </div>

            <Container style={{
              marginLeft: 'auto',
              marginRight: 'auto',
            }}>
              <Stack spacing={8}>
                <div>
                  <Stack spacing={2}>
                    <Typography variant="h2" color={theme.palette.surface.on} style={{
                      fontWeight: 600,
                      fontFamily: 'Manrope'
                    }}>
                      About
                    </Typography>
                    <div>
                      <div style={{
                        float: 'right'
                      }}>
                        <Image src={avatar} alt='avatar' className="indexAvatar" />
                      </div>
                      <div style={{ float: 'left', lineHeight: '128px' }}>
                        <Stack spacing={2}>
                          <Typography variant="h4">.direwolf<Typography>alias as feightwywx / 0x00f8</Typography></Typography>
                        </Stack>
                      </div>
                    </div>
                    <Typography>
                      IMIS专业在读。Web开发学习中。<br/>
                      敲码 / 绘画 / 摄影
                    </Typography>
                    <div>
                      <Stack direction='row' spacing={2}>

                      </Stack>
                    </div>
                  </Stack>
                </div>
                <div>
                  <Typography>©️ 2022 .direwolf</Typography>
                  <Typography>
                    Photo by <Link href="https://unsplash.com/@nvte?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Nathan Duck</Link> on <Link href='https://unsplash.com/s/photos/abstract-orange?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText'>Unsplash</Link>.
                  </Typography>
                </div>
              </Stack>
            </Container>

          </Stack>


        </div>



      </ThemeProvider>
    </div>
  );
}
