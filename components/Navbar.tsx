'use client'

import {
  HoverCard,
  Group,
  Button,
  UnstyledButton,
  Text,
  SimpleGrid,
  ThemeIcon,
  Anchor,
  Center,
  Box,
  Burger,
  Collapse,
  Menu,
  useMantineTheme,
  Container,
  useMantineColorScheme
} from '@mantine/core';

import { useDisclosure } from '@mantine/hooks';
import {
  IconChevronDown,
  IconChevronUp,
} from '@tabler/icons-react';
import classes from './HeaderMegaMenu.module.css';
import AuthButton from "./AuthButton";

export function Navbar() {
  const [drawerOpened, { toggle: toggleDrawer }] = useDisclosure(false);
  const [megaMenuOpened, { toggle: toggleMegaMenu }] = useDisclosure(false);
  const theme = useMantineTheme();

  const links = [
    { label: 'Beranda', link: '#home' },
    { label: 'Tentang Kami', link: '#about' },
    {
      label: 'Kategori Produk', link: '#', items: [
        { label: 'Pestisida', link: '#' },
        { label: 'Benih', link: '#' },
        { label: 'Pupuk', link: '#' },
        { label: 'Perlengkapan', link: '#' },
      ],
    },
    { label: 'Hubungi Kami', link: '#contact' },
  ];

  const items = links.map((link) => {
    const menuItems = link.items?.map((item) => (
      <div className={classes.link} key={link.label}>
        <a href={link.link} >
          {item.label}
        </a>
      </div>
    ));

    if (menuItems) {
      if (drawerOpened) {
        return (
          <Menu key={link.label} trigger='hover' transitionProps={{ exitDuration: 0 }} withinPortal>
            <Menu.Target>
              <a href={link.link} className={classes.link} onClick={toggleMegaMenu}>
                <Center>
                  <span className={classes.linkLabel}>{link.label}</span>
                  {megaMenuOpened ? <IconChevronUp /> : <IconChevronDown />}
                </Center>
              </a>
            </Menu.Target>
            <Collapse in={megaMenuOpened} >
              <div>
                <span>{menuItems}</span>
              </div>
            </Collapse>
          </Menu>
        )
      } else {
        return (
          <Menu key={link.label} trigger='hover' transitionProps={{ exitDuration: 0 }} withinPortal>
            <Menu.Target>
              <a href={link.link} className={classes.link}>
                <Center>
                  <span className={classes.linkLabel}>{link.label}</span>
                  <IconChevronDown />
                </Center>
              </a>
            </Menu.Target>
            <Menu.Dropdown bg='#C78B4Cff'>
              {menuItems}
            </Menu.Dropdown>
          </Menu>
        )
      }
    }

    return (
      <div className={classes.link} key={link.label}>
        <a href={link.link}>
          {link.label}
        </a>
      </div>
    )
  });


  return (
    <Box>
      <header className={classes.header}>
        <Text size="xl" fw={500} >
          Agro Gemilang
        </Text>
        <Group h="100%" gap={0} visibleFrom="sm">
          {items}
        </Group>
        <Group visibleFrom="sm">
          <AuthButton />
        </Group>

        <Burger opened={drawerOpened} onClick={toggleDrawer} hiddenFrom="sm" color='white' />
      </header>
      <Collapse in={drawerOpened} >
        <Box pb={20} className={classes.navbarCollapse} style={{ backgroundColor: '#C78B4Cff' }}>
          <SimpleGrid cols={1}>
            {items}
            <Box px={15}>
              <Button variant="default" fullWidth>Log in</Button>
              <AuthButton />
            </Box>
          </SimpleGrid>
        </Box>
      </Collapse>
    </Box>
  );
}

