/* eslint-disable jsx-a11y/media-has-caption */
import { useTheme } from "styled-components";

import {
  Box,
  Center,
  Cluster,
  Frame,
  Grid,
  Imposter,
  Reel,
  Sidebar,
  Stack,
  Switcher,
} from "../../components/layouts";
import Cover from "../../components/layouts/components/Cover";
import { theme } from "../../core/styles/theme";

export const EveryLayoutComponent = () => {
  const { space } = useTheme();

  return (
    <div>
      <Sidebar>
        <Box>
          Lorem pipidsa piid
          <div style={{ minWidth: "100px" }}>
            as piasdp iapds iasdp asdi pasd apsd apisd padi a
          </div>
        </Box>
        <div style={{ minWidth: "300px" }}>
          <Box>
            <Stack>
              <Box>1</Box>
              <Box>1</Box>
              <Box>1</Box>
            </Stack>
          </Box>
        </div>
      </Sidebar>
      <Center gutters={space.s3}>
        <h2>Box</h2>
        <Box padding={space.s4}>Box</Box>
      </Center>
      <Center gutters={space.s3}>
        <h2>Cluster</h2>
        <Cluster>
          <Box padding={space.s1}>First</Box>
          <Box padding={space.s1}>Second</Box>
          <Box padding={space.s1}>Third</Box>
          <Box padding={space.s1}>Fourth</Box>
          <Box padding={space.s1}>Fifth</Box>
          <Box padding={space.s1}>Sixts</Box>
        </Cluster>
      </Center>

      <Center>
        <h2>Cover</h2>
        <Cover centered=".example-centered">
          <Box padding={space.s1}>Top Cover</Box>
          <section className="example-centered">
            Centered content in cover
          </section>
          <Box padding={space.s1}>Bottom Cover</Box>
        </Cover>
      </Center>

      <Center>
        <h2>Frame ratio: 16/9</h2>
        <Frame ratio={"16:9"}>
          <video
            controls
            src="https://file-examples.com/storage/fef8fbdce362705a7927afd/2017/04/file_example_MP4_480_1_5MG.mp4"
          />
        </Frame>
      </Center>

      <Center>
        <h2>Switcher</h2>
        <Switcher limit={4} threshold={theme.space.measure}>
          <Box padding={space.s1}>Switcher 1</Box>
          <Box padding={space.s1}>Switcher 1</Box>
          <Box padding={space.s1}>Switcher 1</Box>
        </Switcher>
      </Center>

      <h2>Grid</h2>
      <Grid>
        <Box padding={space.s1}>Switcher 1</Box>
        <Box padding={space.s1}>Switcher 1</Box>
        <Box padding={space.s1}>Switcher 1</Box>
        <Box padding={space.s1}>Switcher 1</Box>
        <Box padding={space.s1}>Switcher 1</Box>
        <Box padding={space.s1}>Switcher 1</Box>
        <Box padding={space.s1}>Switcher 1</Box>
        <Box padding={space.s1}>Switcher 1</Box>
        <Box padding={space.s1}>Switcher 1</Box>
      </Grid>

      <h2>Stack</h2>
      <Stack>
        <Box>Top</Box>
        <Box>Middle</Box>
        <Box>
          <Stack>
            <Box>1</Box>
            <Box>2</Box>
            <Box>3</Box>
          </Stack>
        </Box>
      </Stack>

      <Imposter>
        <div style={{ background: "gray" }}>
          <Box>
            <h2>Imposter</h2>
            <Box>Hej</Box>
          </Box>
        </div>
      </Imposter>

      <Center>
        <Box style={{ marginTop: "12px" }}>
          <h2>Reel</h2>
          <Reel>
            <Box>
              <div
                style={{
                  height: "20em",
                  width: "20em",
                }}
              ></div>
            </Box>
            <Box>
              <div
                style={{
                  height: "20em",
                  width: "20em",
                }}
              ></div>
            </Box>
            <Box>
              <div
                style={{
                  height: "20em",
                  width: "20em",
                }}
              ></div>
            </Box>
          </Reel>
        </Box>
      </Center>
    </div>
  );
};
