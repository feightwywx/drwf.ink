import {
  Button,
  Card,
  CardActions,
  CardContent,
} from "@dotdirewolf/mui-m3-theme";
import { Container, Typography, Stack, Grid, useTheme } from "@mui/material";
import React from "react";
import avatar from "../public/avatar.png";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { brands } from "@fortawesome/fontawesome-svg-core/import.macro";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import LaunchIcon from "@mui/icons-material/Launch";
import { NextPage } from "next";
import { HeadLine } from "../components/headline";
import { TitleTypography } from "../components/typography";

const aboutLinks = [
  {
    label: "feightwywx",
    href: "https://github.com/feightwywx",
    icon: <FontAwesomeIcon icon={brands("github")} />,
  },
  {
    label: "@0x00F8",
    href: "https://twitter.com/0x00F8",
    // @ts-expect-error Argument of type '"x-twitter"' is not assignable to parameter of type 'IconName'.
    icon: <FontAwesomeIcon icon={brands("x-twitter")} />,
  },
  {
    label: "@drwf.ink",
    href: "https://bsky.app/profile/drwf.ink",
    // @ts-expect-error Argument of type '"bluesky"' is not assignable to parameter of type 'IconName'.
    icon: <FontAwesomeIcon icon={brands("bluesky")} />,
  },
  {
    label: "点儿恐狼",
    href: "https://space.bilibili.com/2095080",
    icon: <FontAwesomeIcon icon={brands("bilibili")} />,
  },
  {
    label: ".direwolf",
    href: "https://www.pixiv.net/users/18633958",
    // @ts-expect-error Argument of type '"pixiv"' is not assignable to parameter of type 'IconName'.
    icon: <FontAwesomeIcon icon={brands("pixiv")} />,
  },
  {
    label: "canis@direcore.xyz",
    href: "mailto:canis@direcore.xyz",
    icon: <MailOutlineIcon />,
  },
];

const projectLinks = [
  {
    name: "arcaea.icu",
    desc: "音乐游戏Arcaea自制相关资源，包含作谱辅助工具AFF工具箱和用于Python的谱面解析库arcfutil。个人谱面作品同样收录其中。",
    href: "https://arcaea.icu",
  },
  {
    name: "mui-m3-theme",
    desc: "一套遵循Material Design3规范的material-ui组件库，以及兼容原生MUI 5的主题工具。",
    href: "https://github.com/feightwywx/mui-m3-theme",
  },
  {
    name: "homework-mis",
    desc: "一个基于Next.js的作业管理系统，包含教师端和学生端。",
    href: "https://github.com/feightwywx/homework-mis",
  },
];

const Home: NextPage = () => {
  const theme = useTheme();

  return (
    <Stack spacing={{ xs: 6, md: 8 }}>
      <HeadLine
        title="drwf.ink"
        subtitle="絶滅生物が残したインクの跡"
      />

      <Container
        style={{
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        <Stack spacing={{ xs: 6, md: 8 }}>
          {/* About */}
          <div>
            <Stack spacing={2}>
              <TitleTypography>About</TitleTypography>
              {/* 名字 */}
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
                      <Typography>alias as feightwywx / 0x00F8</Typography>
                    </Typography>
                  </Stack>
                </div>
              </div>
              {/* 介绍 */}
              <Typography>
                IMIS专业。Web开发学习中。
                <br />
                敲码 / 绘画 / 摄影
                <br />
                音游 / 任天堂 / 毛毛爱好者
              </Typography>
              <Grid container spacing={1}>
                {aboutLinks.map((link, index) => (
                  <Grid item key={index}>
                    <Button
                      variant="outlined"
                      color="secondary"
                      startIcon={link.icon}
                      href={link.href}
                    >
                      {link.label}
                    </Button>
                  </Grid>
                ))}
              </Grid>
            </Stack>
          </div>

          {/* Projects */}
          <div>
            <Stack spacing={2}>
              <TitleTypography>Projects</TitleTypography>
              <Grid rowSpacing={2} container>
                {projectLinks.map((link, index) => (
                  <Grid
                    key={index}
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
                            }}
                          >
                            {link.name}
                          </Typography>
                          <Typography>{link.desc}</Typography>
                        </Stack>
                      </CardContent>
                      <CardActions>
                        <div style={{ flexGrow: 1 }} />
                        <Button
                          variant="tonal"
                          href={link.href}
                          endIcon={<LaunchIcon />}
                        >
                          了解更多
                        </Button>
                      </CardActions>
                    </Card>
                  </Grid>
                ))}
              </Grid>
            </Stack>
          </div>
        </Stack>
      </Container>
    </Stack>
  );
};

export default Home;
