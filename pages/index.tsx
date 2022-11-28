import {
  Button,
  Card,
  CardActions,
  CardContent,
  createM3Palette,
  unstable_createMaterialDesign3Theme,
} from "@dotdirewolf/mui-m3-theme";
import {
  Container,
  Typography,
  Stack,
  Grid,
  useMediaQuery,
  responsiveFontSizes,
  useTheme,
} from "@mui/material";
import React from "react";
import headbg from "../public/nathan-duck-Jo5FUEkhB_4-unsplash.jpg";
import darkheadbg from "../public/nathan-duck-Jo5FUEkhB_4-unsplash-dark.jpg";
import avatar from "../public/avatar.png";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { brands } from "@fortawesome/fontawesome-svg-core/import.macro";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import LaunchIcon from "@mui/icons-material/Launch";
import { NextPage } from "next";

const Home: NextPage = () => {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
  const theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Stack spacing={{ xs: 6, md: 8 }}>
      {/* 大标题 */}
      <div
        style={{
          width: "auto",
          backgroundColor: prefersDarkMode
            ? theme.palette.surface.on
            : theme.palette.surface.variant,
          color: prefersDarkMode
            ? theme.palette.surface.on
            : theme.palette.surface.variant,
          padding: mobile ? "20vh 5%" : "20vh 5%",
          maxHeight: "60vw",
          borderRadius: "28px",
          backgroundImage: `url(${
            prefersDarkMode ? darkheadbg.src : headbg.src
          })`,
          backgroundSize: "cover",
        }}
      >
        <Typography
          variant="h1"
          style={{
            fontWeight: 600,
            fontFamily: "Manrope",
            textOverflow: "clip",
          }}
        >
          drwf.ink
        </Typography>
        <Typography
          variant="h5"
          style={{
            fontWeight: 400,
          }}
        >
          {"=> drasitc rough wonderland fox.ink"}
        </Typography>
      </div>

      <Container
        style={{
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        <Stack spacing={{ xs: 6, md: 8 }}>
          {/* About */}
          <div
            style={{
              color: theme.palette.surface.on,
            }}
          >
            <Stack spacing={2}>
              <Typography
                variant="h2"
                style={{
                  fontWeight: 600,
                  fontFamily: "Manrope",
                }}
              >
                About
              </Typography>
              <div>
                <div
                  style={{
                    float: "right",
                  }}
                >
                  <Image src={avatar} alt="avatar" className="indexAvatar" />
                </div>
                <div style={{ float: "left", lineHeight: "128px" }}>
                  <Stack spacing={2}>
                    <Typography variant="h4">
                      .direwolf
                      <Typography>alias as feightwywx / 0x00f8</Typography>
                    </Typography>
                  </Stack>
                </div>
              </div>
              <Typography>
                IMIS专业在读。Web开发学习中。
                <br />
                敲码 / 绘画 / 摄影
                <br />
                移动端音游 / 任天堂 / 人外爱好者
              </Typography>
              <div>
                <Grid container spacing={1}>
                  <Grid item>
                    <Button
                      variant="outlined"
                      color="secondary"
                      startIcon={<FontAwesomeIcon icon={brands("github")} />}
                      href="https://github.com/feightwywx"
                    >
                      feightwywx
                    </Button>
                  </Grid>
                  <Grid item>
                    <Button
                      variant="outlined"
                      color="secondary"
                      startIcon={<FontAwesomeIcon icon={brands("twitter")} />}
                      href="https://twitter.com/0x00F8"
                    >
                      @0x00F8
                    </Button>
                  </Grid>
                  <Grid item>
                    <Button
                      variant="outlined"
                      color="secondary"
                      startIcon={<FontAwesomeIcon icon={brands("bilibili")} />}
                      href="https://space.bilibili.com/2095080"
                    >
                      一只恐狼
                    </Button>
                  </Grid>
                  <Grid item>
                    <Button
                      variant="outlined"
                      color="secondary"
                      startIcon={<MailOutlineIcon />}
                      href="mailto:canis@direcore.xyz"
                    >
                      canis@direcore.xyz
                    </Button>
                  </Grid>
                </Grid>
              </div>
            </Stack>
          </div>

          {/* Projects */}
          <div>
            <Stack spacing={2}>
              <Typography
                variant="h2"
                color={theme.palette.surface.on}
                style={{
                  fontWeight: 600,
                  fontFamily: "Manrope",
                  marginBottom: "16px",
                }}
              >
                Projects
              </Typography>

              <Grid rowSpacing={2} container>
                <Grid
                  item
                  sm={6}
                  style={{
                    flexGrow: 1,
                  }}
                >
                  <Card
                    clickable
                    variant="outlined"
                    sx={{
                      mr: { sm: theme.spacing(2) },
                      height: { sm: "250px" },
                    }}
                  >
                    <CardContent
                      sx={{
                        height: { sm: "168px" },
                      }}
                    >
                      <Stack spacing={2}>
                        <Typography
                          variant="h4"
                          style={{
                            fontFamily: "Manrope",
                            fontWeight: 500,
                            color: theme.palette.surface.on,
                          }}
                        >
                          arcaea.icu
                        </Typography>
                        <Typography
                          style={{
                            color: theme.palette.surface.on,
                          }}
                        >
                          音乐游戏Arcaea自制相关资源，包含作谱辅助工具AFF工具箱和用于Python的谱面解析库arcfutil。个人谱面作品同样收录其中。
                        </Typography>
                      </Stack>
                    </CardContent>
                    <CardActions
                      style={{
                        marginTop: "auto",
                        marginBottom: "0",
                      }}
                    >
                      <div style={{ flexGrow: 1 }} />
                      <Button
                        variant="tonal"
                        href="https://arcaea.icu/"
                        endIcon={<LaunchIcon />}
                      >
                        了解更多
                      </Button>
                    </CardActions>
                  </Card>
                </Grid>

                <Grid
                  item
                  sm={6}
                  style={{
                    flexGrow: 1,
                  }}
                >
                  <Card
                    clickable
                    variant="outlined"
                    sx={{ height: { sm: "250px" } }}
                  >
                    <CardContent
                      sx={{
                        height: { sm: "168px" },
                      }}
                    >
                      <Stack spacing={2}>
                        <Typography
                          variant="h4"
                          style={{
                            fontFamily: "Manrope",
                            fontWeight: 500,
                            color: theme.palette.surface.on,
                          }}
                        >
                          mui-m3-theme
                        </Typography>
                        <Typography
                          style={{
                            color: theme.palette.surface.on,
                          }}
                        >
                          一套遵循Material Design
                          3规范的material-ui组件库，以及兼容原生MUI
                          5的主题工具。
                        </Typography>
                      </Stack>
                    </CardContent>
                    <CardActions
                      style={{
                        marginTop: "auto",
                        marginBottom: "0",
                      }}
                    >
                      <div style={{ flexGrow: 1 }} />
                      <Button
                        variant="tonal"
                        href="https://github.com/feightwywx/mui-m3-theme"
                        endIcon={<LaunchIcon />}
                      >
                        了解更多
                      </Button>
                    </CardActions>
                  </Card>
                </Grid>

                <Grid
                  item
                  sm={6}
                  sx={{
                    flexGrow: 1,
                  }}
                >
                  <Card
                    clickable
                    variant="outlined"
                    sx={{
                      height: { sm: "250px" },
                      mr: { sm: theme.spacing(2) },
                    }}
                  >
                    <CardContent
                      sx={{
                        height: { sm: "168px" },
                      }}
                    >
                      <Stack spacing={2}>
                        <Typography
                          variant="h4"
                          style={{
                            fontFamily: "Manrope",
                            fontWeight: 500,
                            color: theme.palette.surface.on,
                          }}
                        >
                          homework-mis
                        </Typography>
                        <Typography
                          style={{
                            color: theme.palette.surface.on,
                          }}
                        >
                          一个基于Next.js的作业管理系统，包含教师端和学生端。
                        </Typography>
                      </Stack>
                    </CardContent>
                    <CardActions
                      style={{
                        marginTop: "auto",
                        marginBottom: "0",
                      }}
                    >
                      <div style={{ flexGrow: 1 }} />
                      <Button
                        variant="tonal"
                        href="https://github.com/feightwywx/mui-m3-theme"
                        endIcon={<LaunchIcon />}
                      >
                        了解更多
                      </Button>
                    </CardActions>
                  </Card>
                </Grid>
              </Grid>
            </Stack>
          </div>
        </Stack>
      </Container>
    </Stack>
  );
};

export default Home;
