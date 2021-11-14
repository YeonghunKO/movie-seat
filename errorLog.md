# css

1. positional 인자는(keyword가 없는 그냥 인자. 위치에 따라 영향을 받는 인자) keyword인자보다(위치에 영향을 받지 않는 인자) 앞에 명시되어야 한다.

```scss
// 요런식으로 되어야 한다.
@include flex(center, $keyword: something);
```

# javascript

1. querySelecterAll은 static NodeList를 반환한다.

- 그래서 select클래스를 추가했는데도 NodeList가 빈 arr이다.
- 이때는 querySelectAll을 전역에 추가하지 말고 클릭할때마다 새로 불러오도록 해야한다.

2. 개발자 도구에서 code snippets을 사용하던 도중 'URI BINDING 에러'가 나타나면 이름명을 영어로 바꿔라

# tip

1. 코드를 읽을때 처음 시작하는 순간부터 차근차근 파고들며 읽어나간다. 무작정 보이는대로 읽지 말고.
2. 지극히 작은 것 부터 시작! ex(DUMMY데이터 만들기, console.log로 데이터 보기)
