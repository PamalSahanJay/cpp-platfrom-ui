import React from 'react';
import './home.css';
import { Card } from "../Card/Card";
import { CmhIcon, DsIcon, DssIcon, EaIcon, EmIcon, IgIcon, JfIcon, KeIcon, KmmIcon, PatIcon } from "../../icons";
import { Stats } from "./Stats";

export function Home() {

      const moveToKE = () => {
            console.log('KE');
            window.location.href = 'https://localhost.wiley.host:3002/home';
      }

      return (
            <div className="home">
                  <div className="titles">
                        <Stats title={'Content Packages Today'} number={12012} />
                        <Stats title={'Content Deliveries Today'} number={25019} />
                        <Stats title={'Enrichment Tasks Today'} number={15012} />
                  </div>
                  <div className="dashboard">

                        <Card title={'KNOWLEDGE EXPLORER'} subtitle={'Browse and discover enriched content'}
                              icon={<KeIcon />}
                              onClickHandler={moveToKE} />
                        <Card title={'DELIVERY SERVICES'} subtitle={'Send content anywhere'} icon={<DsIcon />} />
                        <Card title={'PUBLICITY ALERTS TOOL'} subtitle={'Be alerted when new content arrives'}
                              icon={<PatIcon />} />
                        <Card title={'ENRICHMENT MANAGER'} subtitle={'Next generation enrichment tools'}
                              icon={<EmIcon />} />
                        <Card title={'ENRICHMENT AUDIT'} subtitle={'Report and manage enrichment flows'}
                              icon={<EaIcon />} />
                        <Card title={'KNOWLEDGE MODEL MANAGER'}
                              subtitle={'Manage taxonomies and enrichment results'} icon={<KmmIcon />} />
                        <Card title={'DSS'} subtitle={'Delivery and Syndication Service'} icon={<DssIcon />} />
                        <Card title={'IMAGE GALLERY'} subtitle={'Discover and deliver images'}
                              icon={<IgIcon />} />
                        <Card title={'CMH'} subtitle={'Content Management Hub'} icon={<CmhIcon />} />
                        <Card title={'JOURNAL FINDER'} subtitle={'Find the best journal for your content'}
                              icon={<JfIcon />} />
                  </div>
            </div>
      );
}
