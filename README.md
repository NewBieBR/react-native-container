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

![](https://i.imgur.com/hP2Cwd0.png)

```
<Container row>
    <Container/>
    <Container/>
</Container>
```
![](https://i.imgur.com/XDHDYbo.png)

### Size

```
<Container>
    <Container size={2}/>
    <Container size={3}/>
</Container>
```
![](https://i.imgur.com/rgqtFsv.png)

```
<Container>
    <Container style={{height: 500}}/>
    <Container/>
</Container>
```
![](https://i.imgur.com/1gkKWHs.png)

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
![](https://i.imgur.com/gLnJTmz.png)

## Align Children

### Center

```
<Container center>
    <Container/>
</Container>
```
![](https://i.imgur.com/Oc8ytbv.png)

```
<Container center="horizontal">
    <Container/>
</Container>
```
![](https://i.imgur.com/J1Z634j.png)

```
<Container center="vertical">
    <Container/>
</Container>
```
![](https://i.imgur.com/3TwabYU.png)



