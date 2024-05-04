'use client'

import {
  Badge,
  Group,
  Title,
  Text,
  Card,
  SimpleGrid,
  Container,
  rem,
  useMantineTheme,
} from '@mantine/core';
import { IconGauge, IconUser, IconCookie } from '@tabler/icons-react';
import classes from './About.module.css';

const mockdata = [
  {
    title: 'Produk Berkualitas Tinggi',
    description:
      'Agro Gemilang memastikan bahwa setiap produk yang ditawarkan merupakan yang terbaik di kelasnya. Kami bekerja sama dengan pemasok terpercaya dan memilih benih, pupuk, dan peralatan pertanian dengan standar kualitas tertinggi. Produk-produk kami telah melalui proses seleksi ketat untuk memastikan hasil panen maksimal dan pertumbuhan tanaman yang optimal.',
    icon: IconGauge,
  },
  {
    title: 'Pelayanan Ramah dan Responsif',
    description:
      'Agro Gemilang menawarkan pelayanan ramah dan responsif melalui tim customer service yang terlatih dan berpengalaman di bidang pertanian. Kami menyediakan saluran komunikasi yang mudah diakses seperti email, telepon, dan live chat untuk menangani pertanyaan atau masalah dengan cepat. Staf kami akan merespons secara ramah, memberikan solusi jelas, dan menerima umpan balik untuk peningkatan layanan.',
    icon: IconUser,
  },
  {
    title: 'Jaminan Kepuasan Pelanggan',
    description:
      'Agro Gemilang berkomitmen penuh untuk memberikan kepuasan pelanggan yang maksimal. Oleh karena itu, kami menawarkan jaminan pengembalian produk jika pelanggan tidak puas dengan kualitas atau kondisi produk yang diterima. Kebijakan ini mencerminkan kepercayaan kami pada kualitas produk dan layanan yang kami berikan.',
    icon: IconCookie,
  },
];

export function About() {
  const theme = useMantineTheme();
  const features = mockdata.map((feature) => (
    <Card key={feature.title} shadow="md" radius="md" className={classes.card} padding="xl">
      <feature.icon
        style={{ width: rem(50), height: rem(50) }}
        stroke={2}
        color={'rgb(112, 53, 5)'}
      />
      <Text fz="lg" fw={500} className={classes.cardTitle} mt="md" c='rgb(112, 53, 5)'>
        {feature.title}
      </Text>
      <Text fz="sm" c="#C78B4Cff" mt="sm">
        {feature.description}
      </Text>
    </Card>
  ));

  return (
    <div className={classes.container} id="about">
      <Title order={2} className={classes.title} ta="center" mt="sm">
        Tentang Kami
      </Title>

      <Text c="rgb(112, 53, 5)" className={classes.description} ta="center" mt="md">
        Agro Gemilang adalah pilihan tepat bagi Anda yang mencari toko online pertanian terpercaya dan berkualitas. Kami membanggakan sejumlah keunggulan yang membuat kami unggul di antara yang lain
      </Text>

      <SimpleGrid cols={{ base: 1, md: 3 }} spacing="xl" mt={50}>
        {features}
      </SimpleGrid>
    </div>
  );
}