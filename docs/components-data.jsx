
import React from 'react'
import {
  Arrow,
  Badge,
  Container,
  Row,
  Col,
  PageHeader,
  Section,
  SectionHeader,
  Footer,
  Flex,
  FlexItem,
  Media,
  Link,
  LinkBtn,
  Button,
  Input,
  Select,
  Textarea,
  Radio,
  Checkbox,
  Range,
  Fieldset,
  Progress,
  Toolbar,
  NavItem,
  Menu,
  MenuItem,
  Message,
  Panel,
  PanelHeader,
  PanelBody,
  PanelFooter,
  Card,
  Banner,
} from '..'

export default [
  {
    name: 'Grid',
    examples: [
      <Container>
        <Row>
          <Col xs={6}>Col 6</Col>
          <Col xs={6}>Col 6</Col>
        </Row>
      </Container>,
      <Container>
        <Row>
          <Col sm={6} md={4} lg={3}>Col sm6 md4 lg3</Col>
          <Col sm={6} md={4} lg={3}>Col sm6 md4 lg3</Col>
          <Col sm={6} md={4} lg={3}>Col sm6 md4 lg3</Col>
          <Col sm={6} md={4} lg={3}>Col sm6 md4 lg3</Col>
          <Col sm={6} md={4} lg={3}>Col sm6 md4 lg3</Col>
          <Col sm={6} md={4} lg={3}>Col sm6 md4 lg3</Col>
        </Row>
      </Container>
    ]
  },
  {
    name: 'Media',
    examples: [
      <Media
        image={<img src='//placehold.it/128' />}>
        Media Object
      </Media>,
      <Media
        middle
        image={<img src='//placehold.it/128' />}>
        Media Object
      </Media>,
      <Media
        bottom
        image={<img src='//placehold.it/128' />}>
        Media Object
      </Media>,
    ]
  },
  {
    name: 'Flex',
    examples: [
      <Flex>
        <FlexItem auto>FlexItem</FlexItem>
        <FlexItem>FlexItem</FlexItem>
        <FlexItem>FlexItem</FlexItem>
      </Flex>
    ]
  },
  {
    name: 'PageHeader',
    examples: [
      <PageHeader
        title='PageHeader'
        description='For heading the top of the page'>
        <div>Children go to the right</div>
      </PageHeader>
    ]
  },
  {
    name: 'Footer',
    examples: [
      <Footer>
        <div>Footer</div>
      </Footer>
    ]
  },
  {
    name: 'Section',
    examples: [
      <Section>
        Section adds vertical padding
      </Section>
    ]
  },
  {
    name: 'SectionHeader',
    examples: [
      <Section>
        <SectionHeader title='SectionHeader'>
          Children to the right
        </SectionHeader>
        <p>Adds a linked heading and id to sections. This is some inception type nonsense happening here.</p>
      </Section>
    ]
  },
  {
    name: 'Link',
    examples: [
      <Link href='#Link'>Link</Link>
    ]
  },
  {
    name: 'LinkBtn',
    examples: [
      <LinkBtn href='#Link'>LinkBtn</LinkBtn>,
      <LinkBtn href='#Link' outline>LinkBtn</LinkBtn>
    ]
  },
  {
    name: 'Button',
    examples: [
      <Button href='#Button'>Button</Button>,
      <Button href='#Button' color='red'>Button</Button>,
      <Button href='#Button' outline>Button</Button>,
      <Button href='#Button' outline color='blue'>Button</Button>,
    ]
  },
  {
    name: 'Input',
    examples: [
      <Input
        label='Input'
        name='demo-input' />
    ]
  },
  {
    name: 'Select',
    examples: [
      <Select
        label='Select'
        name='demo-select'
        options={[
          { value: 1, label: 'One' },
          { value: 2, label: 'Two' },
          { value: 3, label: 'Three' },
        ]}/>
    ]
  },
  {
    name: 'Textarea',
    examples: [
      <Textarea
        label='Textarea'
        name='demo-textarea'
        rows={4} />
    ]
  },
  {
    name: 'Radio',
    description: '',
    examples: [
      <Radio
        label='Radio 1'
        value='1'
        name='demo-radio' />,
      <div>
        <Radio
          label='Radio 2'
          value='2'
          name='demo-radio' />
        <Radio
          label='Radio 3'
          value='3'
          name='demo-radio' />
      </div>
    ]
  },
  {
    name: 'Checkbox',
    description: '',
    examples: [
      <Checkbox
        label='Checkbox'
        value='checked'
        name='demo-checkbox' />
    ]
  },
  {
    name: 'Range',
    examples: [
      <Range
        label='Range'
        name='demo-range' />
    ]
  },
  {
    name: 'Fieldset',
    examples: [
      <Fieldset
        legend='Hamburger'>
        <Input
          label='Fries'
          name='demo-fries' />
        <Input
          label='Pickles'
          name='demo-pickles' />
        <Select
          label='Temperature'
          name='demo-temperature'
          options={[
            { value: 1, label: 'Rare' },
            { value: 2, label: 'Medium Rare' },
            { value: 3, label: 'Medium' },
            { value: 4, label: 'Medium Well' },
            { value: 5, label: 'Well Done' },
          ]}/>
      </Fieldset>
    ]
  },
  {
    name: 'Progress',
    examples: [
      <Progress value={32} max={100} />,
      <Progress value={96} max={100} color='red' />,
    ]
  },
  {
    name: 'Toolbar',
    examples: [
      <Toolbar>
        <FlexItem>Toolbar</FlexItem>
        <NavItem href='#Toolbar'>NavItem</NavItem>
        <NavItem href='#Toolbar'>NavItem</NavItem>
        <FlexItem auto />
        <Button>Button</Button>
      </Toolbar>,
      <Toolbar color='blue'>
        <FlexItem>Toolbar</FlexItem>
        <NavItem href='#Toolbar'>NavItem</NavItem>
        <NavItem href='#Toolbar'>NavItem</NavItem>
        <FlexItem auto />
        <Button color='darken-3'>Button</Button>
      </Toolbar>
    ]
  },
  {
    name: 'Menu',
    examples: [
      <Menu>
        <MenuItem href='#Menu'
          label='MenuItem' />
        <MenuItem href='#Menu'
          label='MenuItem' />
        <MenuItem href='#Menu'
          label='MenuItem' />
      </Menu>
    ]
  },
  {
    name: 'Message',
    examples: [
      <Message>Flash Message</Message>,
      <Message>Flash Message - Yay! Success always feels great</Message>,
      <Message color='red'>Flash Message - this one’s probably an error</Message>,
      <Message color='red' outline>Flash Message - this one’s probably a little less severe</Message>,
    ]
  },
  {
    name: 'Badge',
    examples: [
      <Badge>Badge</Badge>,
      <Badge color='green'>Badge</Badge>,
      <Badge color='red'>Badge</Badge>,
    ]
  },
  {
    name: 'Arrow',
    examples: [
      <Arrow />,
      <Arrow up />
    ]
  },
  {
    name: 'Panel',
    examples: [
      <Panel>
        <PanelHeader title='PanelHeader' />
        <PanelBody>
          <Input
            label='Username'
            name='demo-username' />
          <Input
            label='Password'
            name='demo-password' />
          <Button>Sign In</Button>
        </PanelBody>
        <PanelFooter text='PanelFooter' />
      </Panel>
    ]
  },
  {
    name: 'Card',
    examples: [
      <Row>
        <Col sm={6} md={4}>
          <Card
            image={<img src='//placehold.it/512x384' />}>
            <Media
              image={<img src='//placehold.it/48'
                className='circle'/>}>
              <h3 className='h4 m0'>Nested Media Object</h3>
            </Media>
          </Card>
        </Col>
      </Row>
    ]
  },
  {
    name: 'Banner',
    examples: [
      <Banner>
        <h1 className='m0'>Default Banner</h1>
      </Banner>,
      <Banner
        header='BannerHeader'
        footer='BannerFooter'
        bgImage='url(https://d262ilb51hltx0.cloudfront.net/max/2000/1*DZwdGMaeu-rvTroJYui6Uw.jpeg)'>
        <h1 className='m0'>Banner with Background Image</h1>
      </Banner>,
      <Banner
        left
        bgImage='url(https://d262ilb51hltx0.cloudfront.net/max/2000/1*DZwdGMaeu-rvTroJYui6Uw.jpeg)'>
        <h1 className='m0'>Left Aligned Banner</h1>
      </Banner>
    ]
  }
]
