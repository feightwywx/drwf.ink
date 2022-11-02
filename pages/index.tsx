import {
  Button,
  Card,
  CardActions,
  CardContent,
  convertM3ToMuiPalette,
  createM3Palette,
  Fab,
  NavigationRailItem,
  unstable_createMaterialDesign3Theme,
} from "@dotdirewolf/mui-m3-theme";
import { CssBaseline, ThemeProvider, Container, Typography, Link, Stack, Grid, styled, Box, useMediaQuery, createTheme } from "@mui/material";
import { NavigationRail } from "@dotdirewolf/mui-m3-theme";
import React from 'react';
import HomeIcon from '@mui/icons-material/Home';
import BookOutlinedIcon from '@mui/icons-material/BookOutlined';
import AutoAwesomeOutlinedIcon from '@mui/icons-material/AutoAwesomeOutlined';
import headbg from '../public/nathan-duck-Jo5FUEkhB_4-unsplash.jpg';
import darkheadbg from '../public/nathan-duck-Jo5FUEkhB_4-unsplash-dark.jpg';
import avatar from '../public/avatar.png';
import Image from 'next/image';
import { useRouter } from "next/router";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid, regular, brands, icon } from '@fortawesome/fontawesome-svg-core/import.macro';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LaunchIcon from '@mui/icons-material/Launch';

export default function Home() {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  const m3Palette = createM3Palette({ r: 254, g: 80, b: 0, a: 1 });
  const theme = React.useMemo(() => unstable_createMaterialDesign3Theme(
    m3Palette, prefersDarkMode ? 'dark' : 'light'
  ), [m3Palette, prefersDarkMode])
  const router = useRouter();


  return (
    <div>
      <ThemeProvider theme={theme}>
        <CssBaseline />

        <NavigationRail>
          <div style={{ height: '80px' }} />
          <Fab
            variant="lowered"
            color="secondary"
            style={{
              marginBottom: '28px',
            }}
            href='https://github.com/feightwywx/drwf.ink'><FontAwesomeIcon icon={brands('github')} size='xl' /></Fab>
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
                backgroundColor: prefersDarkMode ? theme.palette.surface.on : theme.palette.surface.variant,
                color: prefersDarkMode ? theme.palette.surface.on : theme.palette.surface.variant,
                padding: '20vh 5%',
                maxHeight: '60vw',
                borderRadius: '28px',
                backgroundImage: `url(${prefersDarkMode ? darkheadbg.src : headbg.src})`,
                backgroundSize: 'cover',
              }}>
              <Typography variant="h1" style={{
                fontWeight: 600,
                fontFamily: 'Manrope',
                textOverflow: 'clip'
              }}>
                drwf.ink
              </Typography>
              <Typography variant="h5" style={{
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
                <div style={{
                  color:theme.palette.surface.on
                }}>
                  <Stack spacing={2}>
                    <Typography variant="h2" style={{
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
                      IMIS专业在读。Web开发学习中。<br />
                      敲码 / 绘画 / 摄影<br />
                      移动端音游 / 任天堂 / 人外爱好者
                    </Typography>
                    <div>
                      <Grid container spacing={1}>
                        <Grid item>
                          <Button variant="outlined" color="secondary" startIcon={<FontAwesomeIcon icon={brands('github')} />} href='https://github.com/feightwywx'>feightwywx</Button>
                        </Grid>
                        <Grid item>
                          <Button variant="outlined" color="secondary" startIcon={<FontAwesomeIcon icon={brands('twitter')} />} href='https://twitter.com/0x00F8'>@0x00f8</Button>
                        </Grid>
                        <Grid item>
                          <Button variant="outlined" color="secondary" startIcon={<FontAwesomeIcon icon={brands('bilibili')} />} href='https://space.bilibili.com/2095080'>一只恐狼</Button>
                        </Grid>
                        <Grid item>
                          <Button variant="outlined" color="secondary" startIcon={<MailOutlineIcon />} href='mailto:canis@direcore.xyz'>canis@direcore.xyz</Button>
                        </Grid>
                      </Grid>
                    </div>
                  </Stack>
                </div>

                <div>
                  <Stack spacing={2}>
                    <Typography variant="h2" color={theme.palette.surface.on} style={{
                      fontWeight: 600,
                      fontFamily: 'Manrope',
                      marginBottom: '16px'
                    }}>
                      Projects
                    </Typography>

                    <Grid container>
                      <Grid item md={6}>
                        <Card clickable variant='outlined' style={{
                          height: '250px'
                        }}
                          sx={{ mr: { md: '16px' }, mb: { xs: '16px', md: 0 } }}>
                          <CardContent style={{
                            height: '168px'
                          }}>
                            <Stack spacing={2}>
                              <Typography variant="h4" style={{
                                fontFamily: 'Manrope',
                                fontWeight: 500,
                                color: theme.palette.surface.on
                              }}>arcaea.icu</Typography>
                              <Typography style={{
                                color: theme.palette.surface.on
                              }}>
                                音乐游戏Arcaea自制相关资源，包含作谱辅助工具AFF工具箱和用于Python的谱面解析库arcfutil。个人谱面作品同样收录其中。
                              </Typography>
                            </Stack>
                          </CardContent>
                          <div></div>
                          <CardActions style={{
                            marginTop: 'auto',
                            marginBottom: '0'
                          }}>
                            <div style={{ flexGrow: 1 }} />
                            <Button variant='tonal' href='https://arcaea.icu/' endIcon={<LaunchIcon />} >
                              了解更多
                            </Button>
                          </CardActions>
                        </Card>
                      </Grid>

                      <Grid item md={6}>
                        <Card clickable variant='outlined' style={{
                          height: '250px'
                        }}>
                          <CardContent style={{
                            height: '168px'
                          }}>
                            <Stack spacing={2}>
                              <Typography variant="h4" style={{
                                fontFamily: 'Manrope',
                                fontWeight: 500,
                                color: theme.palette.surface.on
                              }}>mui-m3-theme</Typography>
                              <Typography style={{
                                color: theme.palette.surface.on
                              }}>
                                一套遵循Material Design 3规范的material-ui组件库。
                              </Typography>
                            </Stack>
                          </CardContent>
                          <div></div>
                          <CardActions style={{
                            marginTop: 'auto',
                            marginBottom: '0'
                          }}>
                            <div style={{ flexGrow: 1 }} />
                            <Button variant='tonal' href='https://arcaea.icu/' endIcon={<LaunchIcon />} disabled >
                              了解更多
                            </Button>
                          </CardActions>
                        </Card>
                      </Grid>

                    </Grid>
                  </Stack>
                </div>

                <div style={{
                  color:theme.palette.surface.on
                }}>
                  <Typography>Copyright (c) 2022 .direwolf</Typography>
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
