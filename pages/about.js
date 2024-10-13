import Layout from "@/components/layout/Layout";
import PageTitle from "@/components/sections/PageTitle";
import About from "@/components/sections/innerpages/About";

export default function PageAbout() {
  return (
    <>
      <Layout headerStyle={1} footerStyle={1}>
        <PageTitle bg="/images/banner/9.jpg" pageName="About DHANANI" />

        <About />
      </Layout>
    </>
  );
}
