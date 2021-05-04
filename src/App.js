import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Scrollspy from 'react-scrollspy'
import WOW from 'wowjs';

import { Container, Row, Col, Nav, Navbar, Button, ResponsiveEmbed, Card, Image } from 'react-bootstrap';

import {
    Heatmap,
    Heatmap2,
    Perexajoule,
    Energy,
    Emission,
    Cherry2,
    CO2change,
    CO2volume,
    Greenhouse,
    Warming
} from './Charts/charts';

import { Poll1, Poll2 } from './poll.js';


function CO2() {
    return (
        <span>CO<sub>2</sub></span>
    );
}

function N2O() {
    return (
        <span>N<sub>2</sub>O</span>
    );
}

class App extends React.Component {
    componentDidMount() {
        new WOW.WOW({
            live: false
        }).init();
    }

    render() {
        return (
            <React.Fragment>
                <Navbar bg="dark" expand="lg" fixed="top" className="shadow text-white">
                    <Container>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Scrollspy items={ ['home', 'part1', 'part2', 'part3', 'part4', 'part5'] } className="m-auto nav nav-pills" currentClassName="active">
                                <Nav.Item as="li"><Nav.Link href="#home">Home</Nav.Link></Nav.Item>
                                <Nav.Item as="li"><Nav.Link href="#part1">Unstoppable <CO2 /></Nav.Link></Nav.Item>
                                <Nav.Item as="li"><Nav.Link href="#part2">Where is the ice?</Nav.Link></Nav.Item>
                                <Nav.Item as="li"><Nav.Link href="#part3">Fastest-warming country</Nav.Link></Nav.Item>
                                <Nav.Item as="li"><Nav.Link href="#part4">Climate “chaos”</Nav.Link></Nav.Item>
                                <Nav.Item as="li"><Nav.Link href="#part5">Journey to net zero</Nav.Link></Nav.Item>
                            </Scrollspy>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
                <Container fluid className="masthead" id="home">
                    <Container className="h-100">
                        <Row className="h-100 align-items-center">
                            <Col className="text-center">
                                <h1><span>Reining in climate change:</span></h1>
                                <p><span>Are we too late to the party?</span></p>
                            </Col>
                        </Row>
                        <a href="#part1">
                            <div className="mouse_scroll">
                                <div className="mouse">
                                    <div className="wheel"></div>
                                </div>
                                <div>
                                    <span className="m_scroll_arrows unu"></span>
                                    <span className="m_scroll_arrows doi"></span>
                                    <span className="m_scroll_arrows trei"></span>
                                </div>
                            </div>
                        </a>
                    </Container>
                </Container>
                <Container fluid={'lg'} className="my-3 px-lg-6">
                    <Row className="mt-5 mb-4">
                        <Col>
                            <h2>Reining in climate change: Are we too late to the party?</h2>
                        </Col>
                    </Row>
                    <Row className="mt-5 mb-4">
                        <Col className="lead">
                            <p>The world sighed with relief after prominent climate change denier, former US President Donald Trump left office.</p>
                            <p>The green agenda is once again a priority for the second-highest global emitter of carbon dioxide (<CO2 />) after Trump’s successor, Joe Biden, pledged to halve carbon emissions by 2030.</p>
                            <p>Similar pledges were recently made by the world's fifth-largest <CO2 /> emitter, Japan, as well as Canada, which is 12th in terms of the global share of carbon emissions.</p>
                            <p>As some commentators point out, US emissions <a href="https://www.climatechangenews.com/2020/10/06/us-emissions-four-years-president-trump/">did decline</a> during Trump’s term in office, but off the pace needed to meet the country’s climate targets.</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col><Heatmap /></Col>
                    </Row>
                    <Row>
                        <Col><Heatmap2 /></Col>
                    </Row>
                    <Row className="mt-2 mb-3">
                        <Col className="lead">
                            <p>So what is the current situation with <CO2 />and the other greenhouse gases believed to be behind climate change, and how close is the world to reaching its goal of net zero carbon emissions?</p>
                        </Col>
                    </Row>
                </Container>
                <Container fluid={'lg'} id="part1" className="px-lg-6">
                    <Row className="mt-1">&nbsp;</Row>
                    <Row className="my-5">
                        <Col>
                            <h2>Unstoppable <CO2 /></h2>
                        </Col>
                    </Row>
                    <Row className="my-3">
                        <Col lg={7} className="lead">
                            <p>When COVID-19 struck in early 2020, bringing some industries to a standstill and shutting down flights all across the globe, there was hope that it might help slow the pace of climate change.</p>
                            <p>However, a year into the pandemic, the World Meteorological Organisation <a href="https://library.wmo.int/index.php?lvl=notice_display&id=21795#.YIpRfy2ZPOQ">revealed</a> that the lockdown-related fall in emissions "is just a tiny blip" on the long-term graph of atmospheric concentrations of <CO2 />.</p>
                            <p>Although daily global carbon emissions <a href="https://www.nature.com/articles/s41558-020-0797-x">fell by 17 per cent</a> at the peak of the COVID-related shutdown, concentrations continue to rise. Available data from Global-Warming.org shows that the regular trend of monthly emissions – spiking in autumn and winter and dropping in summer – has not undergone any significant change.</p>
                        </Col>
                        <Col lg={5}>
                            <Greenhouse />
                        </Col>
                        <Col lg={12} className="lead">
                            <p>Three gases are believed to be major contributors to climate change: <CO2 />, methane and nitrous oxide (<N2O />).</p>
                            <p>What these gases do is trap heat close to the Earth's surface, driving up temperatures and causing sea ice to melt, which in turn increases the risk of flooding caused by rising sea levels.</p>
                            <p>The concentration of these gases in the atmosphere has accumulated over centuries, and has recently been rising at a continuous rate. <CO2 /> concentration is up by 40 per cent since 1750, <N2O /> by 20 per cent, and methane by a whopping 150 per cent. This trend is largely attributed to the burning of dirty fossil fuels.</p>
                        </Col>
                        <Col lg={7}><CO2volume /></Col>
                        <Col lg={5}><CO2change /></Col>
                        <Col lg={12} className="lead">
                            <p>Greenhouse gas emissions are usually measured in parts per million (ppm) to define their abundance in the atmosphere.</p>
                            <blockquote className="my-5 wow animate__animated animate__bounceInLeft"><p>We breached the global threshold of 400 parts per million in 2015, and just four years later, we crossed 410 ppm, such a rate of increase has never been seen in the history of our records</p><footer className="blockquote-footer text-right">WMO secretary-general Prof Petteri Taalas</footer></blockquote>
                            <p>The global average for carbon emissions stood at 410.5 ppm in 2019, 2.6 ppm up from 2018. While data for 2020 is not yet fully available, it is preliminarily expected to continue the upward trend.</p>
                        </Col>
                    </Row>
                </Container>
                <Container fluid={'lg'} id="part2" className="px-lg-6">
                    <Row className="mt-1">&nbsp;</Row>
                    <Row className="my-5">
                        <Col>
                            <h2>Where is the ice?</h2>
                        </Col>
                    </Row>
                    <Row className="my-3">
                        <Col lg={12} className="lead">
                            <p>While all the talk about <CO2 /> emissions may sound a bit too scientific for many people, we can see with our own eyes that the Arctic ice pack and global glaciers are diminishing. This is often attributed to climate change.</p>
                            <p>According to a recent study published in the <a href="https://www.nature.com/articles/s41586-021-03436-z">Nature journal</a>, glaciers across the world – half of them in the USA and Canada – are melting at an accelerating rate.</p>
                            <p>The glaciers, which were previously considered to be permanent fixtures, were found to have lost about 270 billion tonnes of ice a year since 2000.</p>
                            <p>This has contributed to 21 per cent of the global rise in sea levels.</p>
                        </Col>
                        <Col lg={12} className="mt-2 mb-4">
                            <ResponsiveEmbed aspectRatio="16by9">
                                <iframe className="embed-responsive-item" src="https://www.youtube.com/embed/JTbIxjTn8RI?rel=0" title="Rising waters"></iframe>
                            </ResponsiveEmbed>
                        </Col>
                        <Col lg={12} className="lead">
                            <p>Moreover, the study’s lead author, Romain Hugonnet from the University of Toulouse in France, warned that the situation in the Himalayas is a cause for particular concern.</p>
                            <blockquote className="my-5 wow animate__animated animate__bounceInRight"><p>If the glacier shrinkage keeps accelerating, populous countries like India and Bangladesh could face water or food shortages in a few decades</p><footer className="blockquote-footer text-right">French climate scientist Romain Hugonnet</footer></blockquote>
                            <p>According to him, the situation with the glaciers “mirrors the global increase in temperature”, stemming from the burning of coal, oil and gas.</p>
                            <p>While conducting the study, researchers primarily used imagery acquired by Nasa’s Terra satellite between 2000 and 2019 to scrutinise over 200,000 glaciers around the world.</p>
                        </Col>
                        <Col md={8}>
                            <Warming />
                        </Col>
                        <Col md={4}>
                          <Card bg="light" text="dark" id="polar-ice" className="p-0 wow animate__animated animate__zoomInRight">
                            <Image src="./polar-ice.png" className="card-img-top" />
                            <Card.Body>
                              <Card.Text className="p-0 text-center">
                                <div>The extent of sea ice around the North Pole has shrunk from 7.2m sq km in September 1979 to 4.7m sq km in September 2018. The pink line indicates the median ice edge between 1981 and 2010.</div><small className="text-small">Source: University Corporation for Atmospheric Research</small>
                              </Card.Text>
                            </Card.Body>
                          </Card>
                        </Col>
                        <Col lg={12} className="lead">
                            <p>Glaciers are, metaphorically speaking, just the tip of the iceberg. A new <a href="https://www.nature.com/articles/s41558-020-0865-2.epdf">Nature climate change study</a> predicted that summer sea ice on the surface of the Arctic Ocean could disappear entirely by 2035.</p>
                            <p>However, the unsettling predictions of an imminent surge in sea levels have yet to materialise. A <a href="https://www.nature.com/articles/s41586-019-0901-4">2019 study</a> found that there is only a five per cent chance that the Antarctic ice cliff melting will contribute more than 39 cm to global sea levels by 2100.</p>
                        </Col>
                    </Row>
                </Container>
                <Container fluid={'lg'} id="part3" className="px-lg-6">
                    <Row className="mt-1">&nbsp;</Row>
                    <Row className="my-5">
                        <Col>
                            <h2>Fastest-warming country</h2>
                        </Col>
                    </Row>
                    <Row className="my-3">
                        <Col lg={12} className="lead">
                            <p>Russia, about a third of which is located in the Arctic circle, has consistently been one of the fastest-warming countries on the planet, as well as being a top fossil fuel producer.</p>
                            <p>But for decades, according to the independent scientific <a href="https://climateactiontracker.org/countries/russian-federation/">Climate Action Tracker</a>, Russia has been very slow to act on climate change, despite ratifying both the Kyoto Protocol and the subsequent Paris Agreement aiming to reduce carbon emissions.</p>
                        </Col>
                        <Col md={8} className="lead">
                            <p>Back in 2003, Russian President Vladimir Putin even joked that “2 or 3 degrees would do no harm – we will use fur coats less and require less fuel”.</p>
                            <p>And it appears that his joke is becoming a reality, with Russia continuously warming at 2.5 times the global average rate, according to the latest research by the state meteorological service <a href="http://www.meteorf.ru/press/news/20626/">Roshydromet</a>.</p>
                            <p>Between 1976 and 2019, average Russian temperatures rose by 0.47°C per decade — more than twice the global average of 0.18°C.</p>
                            <p>This has already led to numerous disasters.</p>
                            <p>Last winter, a fuel reservoir collapsed at a Russian power plant near the Arctic city of Norilsk, leaking 21,000 tons of diesel. The incident was subsequently blamed on subsiding permafrost.</p>
                        </Col>
                        <Col md={4} className="lead">
                          <Card bg="dark" text="light" id="polar-ice" className="p-0 wow animate__animated animate__flipInX">
                            <Image src="./putin.jpg" className="card-img-top" />
                            <Card.Body>
                              <Card.Text className="p-0 text-center">
                                <div>Putin earlier cast doubt on the man-made origins of global warming, saying that nobody knows its origins.</div><small className="text-small">Source: Kremlin.ru</small>
                              </Card.Text>
                            </Card.Body>
                          </Card>
                        </Col>
                        <Col lg={12} className="lead">
                            <p>Over the last decade, people in Siberia have been affected by forest fires every summer. In 2020, the blazes emitted a record 244 megatonnes of <CO2 />, over 30 per cent more than in 2019.</p>
                            <p>The map published by the Russian office of Greenpeace shows all forest fires that ravaged the country in 2020: <span style={{backgroundColor: '#ffc107', color: '#fff'}}>&nbsp;yellow&nbsp;</span> dots illustrate those of them that occured in spring and <span style={{backgroundColor: '#eb4c2f', color: '#fff'}}>&nbsp;red&nbsp;</span> – in summer and autumn.</p>
                        </Col>
                    </Row>
                </Container>
                <Container fluid className="w-100" id="gp-forest-rus">
                    <Row className="h-100 align-items-center_">
                        <Col className="text-right mt-1">
                            <p>Map of 2020 forest fires by <a href="https://maps.greenpeace.org/maps/gpru/fires_2020/?_ga=2.217082966.1125556311.1619785086-2099986990.1619785085"><span className="badge badge-success h5">GREENPEACE</span></a></p>
                        </Col>
                    </Row>
                </Container>
                <Container fluid={'lg'} className="mt-5 mb-3 px-lg-6">
                    <Row>
                        <Col className="lead">
                            <p>Scientists <a href="https://www.sciencedaily.com/releases/2020/09/200928155746.htm">discovered</a> that 2019 and 2020 saw what was described as “extreme burning” north of the Arctic circle. Over a half of the fires took place in areas covered by permafrost, which locks in enormous amounts of carbon from prehistoric biomass.</p>
                            <p>Dr. Thomas Smith from the London School of Economics and Political Science, commenting on the study, said: “The record high temperatures and associated fires have the potential to turn this important carbon sink into a carbon source, driving further global heating.”</p>
                        </Col>
                    </Row>
                </Container>
                <Container fluid={'lg'} id="part4" className="px-lg-6">
                    <Row className="mt-1">&nbsp;</Row>
                    <Row className="my-5">
                        <Col>
                            <h2>Climate “chaos”</h2>
                        </Col>
                    </Row>
                    <Row className="my-3">
                        <Col className="lead">
                            <p>But as scientists point out, the ongoing climate processes are leading, not only to warmer temperatures, but also to chaotic extreme weather events.</p>
                            <p>This April is on track to be the frostiest in the UK for 60 years, due to which Magnolia flowers have been walloped by plunging overnight temperatures.</p>
                            <p>Japan, on the contrary, saw its first cherry blossoms in March – the earliest they have appeared since the 15th century. And according to an approximate trajectory, this will continue to happen increasingly often.</p>
                        </Col>
                    </Row>
                    <Row className="wow_ animate__animated_ animate__fadeIn_">
                        <Col><Cherry2 /></Col>
                    </Row>
                    <Row className="my-3">
                        <Col className="lead">
                            <p>Scientists warn that rising temperatures will lead to even more chaotic extreme weather events.</p>
                            <p>Urals-based climate scientist Konstantin Gribanov compares the situation to a pan placed on a hot stove.</p>
                            <blockquote className="my-5 wow animate__animated animate__fadeIn"><p>Just imagine that our planet is a pan, and the atmosphere in which we live is boiling water. If we turn the stove on, chaos will increase. And the rise in greenhouse gases creates the same effect</p><footer className="blockquote-footer text-right">Russian climate scientist Konstantin Gribanov</footer></blockquote>
                            <p>The UN also <a href="https://news.un.org/en/story/2020/10/1075142">highlights</a> a dramatic increase in extreme weather events in the past 20 years.</p>
                            <p>Globally, 7,348 major disaster events were observed in that period, claiming over a million lives and affecting 4.2 billion people.</p>
                            <p>Debarati Guha-Sapir of the University of Louvain, Belgium, which provided data for the UN report, predicts that “heatwaves are going to be our biggest challenge in the next 10 years, especially in the poor countries”.</p>
                            <blockquote className="my-5 wow animate__animated animate__fadeIn"><p>If this level of growth in extreme weather events continues over the next 20 years, the future of mankind looks very bleak indeed</p><footer className="blockquote-footer text-right">University of Louvain, Debarati Guha-Sapir</footer></blockquote>
                            <p>Follow <a href="https://www.carbonbrief.org/mapped-how-climate-change-affects-extreme-weather-around-the-world">this link</a> to see a map of extreme weather events.</p>
                        </Col>
                    </Row>
                </Container>
                <Container fluid={'lg'} id="part5" className="px-lg-6">
                    <Row className="mt-1">&nbsp;</Row>
                    <Row className="my-5">
                        <Col>
                            <h2>Journey to net zero</h2>
                        </Col>
                    </Row>
                    <Row className="my-3">
                        <Col lg={12} className="lead">
                            <p>In the past two years, dozens of countries have announced a goal of net zero emissions by 2050, which would mean virtually eliminating fossil fuels from their economies.</p>
                            <p>But there is still a long way to go, as most primary energy still comes from fossil fuels such as coal, gas and oil.</p>
                        </Col>
                        <Col lg={12}><Emission /></Col>
                        <Col lg={12} className="lead">
                            <p>It is true that so-called renewable energy is expanding across the world, with more than 80 per cent of all new electricity-generating projects built in 2020 being renewable, according to the <a href="https://irena.org/publications/2021/March/Renewable-Capacity-Statistics-2021">International Renewable Energy Agency (IRENA)</a>.</p>
                            <p>But according to UK-based climate think-tank Ember, the growth of renewables has not kept pace with growth in demand for electricity.</p>
                            <p>Ember analyst Dave Jones <a href="https://www.forbes.com/sites/davidrvetter/2021/04/07/2020-set-a-new-record-for-renewable-energy-whats-the-catch/">notes</a>: “We actually used more electricity from fossil fuels in 2020 globally than in 2015 when the Paris climate agreement was signed.”</p>
                        </Col>
                        <Col sm={8} className="lead">
                            <p>Global efforts to reduce emissions, including through the use of “green energy”, have born some fruit, with most top carbon-producing countries, with the exception of some developing nations in Asia, showing downward emissions trends per exajoule of consumed energy.</p>
                            <p>An exajoule is an energy metric used by energy giants to compare different sources of energy, and is roughly equivalent to burning 174 million barrels of oil.</p>
                        </Col>
                        <Col sm={4}>
                          <Card bg="info" text="light" id="one-exajoule" className="wow animate__animated animate__heartBeat">
                            <Card.Body>
                              <Card.Text className="text-center">
                                <div className="h1">1 Exajoule</div><div>Did you know that I exajoule can power the entire UK for 4 months?</div>
                              </Card.Text>
                            </Card.Body>
                          </Card>
                        </Col>
                        <Col lg={12}><Perexajoule /></Col>
                        <Col lg={12}>
                            <p>Overall, however, pundits are sceptical about whether it is possible to “go completely green” in the next dozen years.</p>
                            <p>The head of the Russian National Energy Security Foundation, Konstantin Simonov, <a href="https://rg.ru/2021/02/08/smozhet-li-zelenaia-energetika-pobedit-neft-i-gaz.html">says</a> that while green energy is now being actively promoted by the EU and the USA, “85 per cent of the global energy balance is still covered by hydrocarbons”.</p>
                            <p>“I have been hearing for 10 years that oil will soon become unwanted, but if you look at its consumption in the same period, not including 2020, then it increased by 13 per cent, and consumption of gas rose by 25 per cent”.</p>
                        </Col>
                        <Col lg={12}><Energy /></Col>
                        <Col lg={12}>
                            <p>All in all, it appears that the race to net zero emissions is far from over, but at least the issue is gradually coming back into the spotlight after being pushed out of it for almost a year by COVID-19.</p>
                        </Col>
                    </Row>
                </Container>
                <section className="bg-light-2 text-center wow animate__animated animate__fadeIn" id="polls">
                    <Container>
                        <div><Poll1 style={{fontWeight: "normal"}}/></div>
                        <div><Poll2 /></div>
                    </Container>
                </section>
                <footer className="bg-dark text-center text-white">
                    <Container className="p-4">
                        <div className="mb-3">
                            <p>The webpage was put together by Goldsmiths postgraduate student Yaroslava Kiryukhina using React, ApexCharts.js, Bootstrap and Python with Pandas & NumPy for data processing and analysis.</p>
                            <p>Let’s connect:</p>
                        </div>
                        <div className="mb-1">
                            <Button variant="outline-light" size="sm" className="btn-floating m-1" href="https://www.facebook.com/yaraolenina/">Facebook</Button>
                            <Button variant="outline-light" size="sm" className="btn-floating m-1" href="https://twitter.com/dj_olen">Twitter</Button>
                            <Button variant="outline-light" size="sm" className="btn-floating m-1" href="https://www.instagram.com/dj_olen/">Instagram</Button>
                            <Button variant="outline-light" size="sm" className="btn-floating m-1" href="https://www.linkedin.com/in/yaroslava-kiryukhina-bb992643/">LinkedIn</Button>
                            <Button variant="outline-light" size="sm" className="btn-floating m-1" href="https://github.com/yarakiryukhina/yarakiryukhina">Github</Button>
                        </div>
                    </Container>
                    <div className="text-center p-3" style={{backgroundColor: "rgba(0, 0, 0, 0.2)"}}>
                        © 2021 Copyright: Yaroslava Kiryukhina
                    </div>
                </footer>
            </React.Fragment>
        );
    }
}

export default App;
