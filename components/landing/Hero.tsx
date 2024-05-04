"use client"

import { Image, Title, Button, Group, Text } from '@mantine/core';
import image from '@/assets/hero.png';
import classes from './HeroBullets.module.css';

export function Hero() {
  return (
    <div className={classes.inner} id="home">
      <div className={classes.content}>
        <Title className={classes.title} mb="md">
          <span>Selamat Datang</span>
        </Title>
        <Title className={classes.title}>
          di <span className={classes.highlight}>AGRO</span> GEMILANG<br />
          <span className='text-xl'>Mitra Terpercaya untuk Kebutuhan Pertanian</span>
        </Title>
        <Text c="rgb(135, 95, 52)" mt="md">
          Di Agro Gemilang, kami menyediakan solusi lengkap untuk para petani, pekebun, dan pecinta berkebun. Toko kami menawarkan produk-produk pertanian berkualitas tinggi, dari benih unggul, pupuk organik, alat pertanian modern, hingga perlengkapan berkebun terlengkap.
        </Text>

        <Group mt={30}>
          <Button radius="md" size="md" className={classes.control}>
            Mari Berbelanja
          </Button>
        </Group>
      </div>
      <Image src={image.src} className={classes.image} />
    </div>
  );
}