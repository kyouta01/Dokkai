const quizThemes = {
  makan: {
    story: [
      "<ruby>昨日<rt>きのう</rt></ruby>、<ruby>私<rt>わたし</rt></ruby>は<ruby>友達<rt>ともだち</rt></ruby>とラーメンを<ruby>食<rt>た</rt></ruby>べました。",
      "その<ruby>店<rt>みせ</rt></ruby>はとても<ruby>人気<rt>にんき</rt></ruby>があり、少し<ruby>並<rt>なら</rt></ruby>びました。",
      "<ruby>スープ<rt>すーぷ</rt></ruby>は<ruby>濃<rt>こ</rt></ruby>くて<ruby>美味<rt>おい</rt></ruby>しかったです。",
      "デザートに<ruby>抹茶<rt>まっちゃ</rt></ruby>アイスも<ruby>食<rt>た</rt></ruby>べました。"
    ],
    questions: [
      { q:"何を<ruby>食<rt>た</rt></ruby>べましたか？", options:["ラーメン","すし","カレー"], answer:0 },
      { q:"<ruby>店<rt>みせ</rt></ruby>はどうでしたか？", options:["空いていた","<ruby>人気<rt>にんき</rt></ruby>があった","高かった"], answer:1 },
      { q:"デザートは何ですか？", options:["ケーキ","<ruby>抹茶<rt>まっちゃ</rt></ruby>アイス","フルーツ"], answer:1 },
      { q:"誰と<ruby>食<rt>た</rt></ruby>べましたか？", options:["一人","<ruby>友達<rt>ともだち</rt></ruby>","家族"], answer:1 },
      { q:"<ruby>スープ<rt>すーぷ</rt></ruby>の<ruby>味<rt>あじ</rt></ruby>は？", options:["薄い","<ruby>濃<rt>こ</rt></ruby>い","しょっぱい"], answer:1 }
    ]
  },

  belanja: {
    story: [
      "<ruby>先週<rt>せんしゅう</rt></ruby>、<ruby>私<rt>わたし</rt></ruby>は新しい<ruby>服<rt>ふく</rt></ruby>を<ruby>買<rt>か</rt></ruby>いにデパートへ<ruby>行<rt>い</rt></ruby>きました。",
      "<ruby>セール<rt>せーる</rt></ruby>があって<ruby>値段<rt>ねだん</rt></ruby>が<ruby>安<rt>やす</rt></ruby>かったです。",
      "青いシャツと黒いズボンを<ruby>買<rt>か</rt></ruby>いました。",
      "<ruby>店員<rt>てんいん</rt></ruby>さんはとても<ruby>親切<rt>しんせつ</rt></ruby>でした。"
    ],
    questions: [
      { q:"どこで<ruby>買<rt>か</rt></ruby>い物しましたか？", options:["スーパー","デパート","コンビニ"], answer:1 },
      { q:"何を<ruby>買<rt>か</rt></ruby>いましたか？", options:["靴","シャツとズボン","バッグ"], answer:1 },
      { q:"<ruby>値段<rt>ねだん</rt></ruby>はどうでしたか？", options:["高かった","<ruby>安<rt>やす</rt></ruby>かった","同じ"], answer:1 },
      { q:"<ruby>店員<rt>てんいん</rt></ruby>さんは？", options:["無愛想","<ruby>親切<rt>しんせつ</rt></ruby>","忙しい"], answer:1 },
      { q:"いつ<ruby>買<rt>か</rt></ruby>い物しましたか？", options:["昨日","<ruby>先週<rt>せんしゅう</rt></ruby>","来週"], answer:1 }
    ]
  },

  hokkaido: {
    story: [
      "<ruby>北海道<rt>ほっかいどう</rt></ruby>は<ruby>日本<rt>にほん</rt></ruby>の<ruby>北<rt>きた</rt></ruby>にあります。",
      "<ruby>冬<rt>ふゆ</rt></ruby>は<ruby>雪<rt>ゆき</rt></ruby>が多くてとても<ruby>寒<rt>さむ</rt></ruby>いです。",
      "<ruby>夏<rt>なつ</rt></ruby>は<ruby>涼<rt>すず</rt></ruby>しく、<ruby>美<rt>うつく</rt></ruby>しい<ruby>花<rt>はな</rt></ruby>がたくさん<ruby>咲<rt>さ</rt></ruby>きます。",
      "<ruby>食<rt>た</rt></ruby>べ物も<ruby>美味<rt>おい</rt></ruby>しく、特に<ruby>海鮮<rt>かいせん</rt></ruby>が<ruby>有名<rt>ゆうめい</rt></ruby>です。"
    ],
    questions: [
      { q:"<ruby>北海道<rt>ほっかいどう</rt></ruby>はどこにありますか？", options:["南","<ruby>北<rt>きた</rt></ruby>","西"], answer:1 },
      { q:"<ruby>冬<rt>ふゆ</rt></ruby>はどうですか？", options:["暑い","<ruby>雪<rt>ゆき</rt></ruby>が多い","雨が多い"], answer:1 },
      { q:"<ruby>夏<rt>なつ</rt></ruby>はどうですか？", options:["寒い","<ruby>涼<rt>すず</rt></ruby>しい","暑い"], answer:1 },
      { q:"<ruby>有名<rt>ゆうめい</rt></ruby>な<ruby>食<rt>た</rt></ruby>べ物は？", options:["肉","<ruby>海鮮<rt>かいせん</rt></ruby>","果物"], answer:1 },
      { q:"<ruby>花<rt>はな</rt></ruby>はいつ<ruby>咲<rt>さ</rt></ruby>きますか？", options:["<ruby>冬<rt>ふゆ</rt></ruby>","<ruby>夏<rt>なつ</rt></ruby>","秋"], answer:1 }
    ]
  },

  "gedung-seni": {
    story: [
      "<ruby>昨日<rt>きのう</rt></ruby>、<ruby>美術館<rt>びじゅつかん</rt></ruby>へ<ruby>行<rt>い</rt></ruby>きました。",
      "<ruby>世界中<rt>せかいじゅう</rt></ruby>の<ruby>有名<rt>ゆうめい</rt></ruby>な<ruby>絵画<rt>かいが</rt></ruby>が<ruby>展示<rt>てんじ</rt></ruby>されていました。",
      "特に<ruby>印象派<rt>いんしょうは</rt></ruby>の<ruby>作品<rt>さくひん</rt></ruby>が<ruby>美<rt>うつく</rt></ruby>しかったです。",
      "<ruby>カフェ<rt>かふぇ</rt></ruby>で<ruby>美味<rt>おい</rt></ruby>しい<ruby>コーヒー<rt>こーひー</rt></ruby>も<ruby>飲<rt>の</rt></ruby>みました。"
    ],
    questions: [
      { q:"どこへ<ruby>行<rt>い</rt></ruby>きましたか？", options:["映画館","<ruby>美術館<rt>びじゅつかん</rt></ruby>","博物館"], answer:1 },
      { q:"どんな<ruby>作品<rt>さくひん</rt></ruby>がありましたか？", options:["音楽","<ruby>絵画<rt>かいが</rt></ruby>","彫刻"], answer:1 },
      { q:"どの<ruby>作品<rt>さくひん</rt></ruby>が特に良かったですか？", options:["<ruby>印象派<rt>いんしょうは</rt></ruby>","抽象画","浮世絵"], answer:0 },
      { q:"<ruby>カフェ<rt>かふぇ</rt></ruby>で何を<ruby>飲<rt>の</rt></ruby>みましたか？", options:["お茶","<ruby>コーヒー<rt>こーひー</rt></ruby>","ジュース"], answer:1 },
      { q:"いつ<ruby>行<rt>い</rt></ruby>きましたか？", options:["<ruby>昨日<rt>きのう</rt></ruby>","今日","明日"], answer:0 }
    ]
  },

  olahraga: {
    story: [
      "<ruby>日曜日<rt>にちようび</rt></ruby>に<ruby>公園<rt>こうえん</rt></ruby>でサッカーをしました。",
      "<ruby>天気<rt>てんき</rt></ruby>は<ruby>晴<rt>は</rt></ruby>れていて<ruby>気持<rt>きも</rt></ruby>ちよかったです。",
      "<ruby>友達<rt>ともだち</rt></ruby>と10人で<ruby>試合<rt>しあい</rt></ruby>をしました。",
      "たくさん<ruby>走<rt>はし</rt></ruby>ったのでとても<ruby>疲<rt>つか</rt></ruby>れました。"
    ],
    questions: [
      { q:"何をしましたか？", options:["野球","サッカー","テニス"], answer:1 },
      { q:"どこでしましたか？", options:["体育館","<ruby>公園<rt>こうえん</rt></ruby>","学校"], answer:1 },
      { q:"何人で<ruby>試合<rt>しあい</rt></ruby>しましたか？", options:["5人","10人","20人"], answer:1 },
      { q:"<ruby>天気<rt>てんき</rt></ruby>はどうでしたか？", options:["雨","<ruby>晴<rt>は</rt></ruby>れ","曇り"], answer:1 },
      { q:"終わった後どうでしたか？", options:["<ruby>疲<rt>つか</rt></ruby>れた","元気","寒かった"], answer:0 }
    ]
  }
};
