# React Native Container

Simply an enhanced View component for lazy developers.

## Layout

### Row and Col
```
<Container col>
    <Container/>
    <Container/>
</Container>
```
<img src="https://i.imgur.com/hP2Cwd0.png" width="240">

```
<Container row>
    <Container/>
    <Container/>
</Container>
```
<img src="https://i.imgur.com/XDHDYbo.png" width="240">

### Size

```
<Container>
    <Container size={2}/>
    <Container size={3}/>
</Container>
```
<img src="https://i.imgur.com/rgqtFsv.png" width="240">

```
<Container>
    <Container style={{height: 500}}/>
    <Container/>
</Container>
```
<img src="https://i.imgur.com/1gkKWHs.png" width="240">

### Nested

```
<Container row>
    <Container>
        <Container/>
        <Container/>
    </Container>

    <Container/>
</Container>
```
<img src="https://i.imgur.com/gLnJTmz.png" width="240">

## Align Children

### Center

```
<Container center>
    <Container/>
</Container>
```
<img src="https://i.imgur.com/Oc8ytbv.png" width="240">

```
<Container center="horizontal">
    <Container/>
</Container>
```
<img src="https://i.imgur.com/J1Z634j.png" width="240">

```
<Container center="vertical">
    <Container/>
</Container>
```
<img src="https://i.imgur.com/3TwabYU.png" width="240">



