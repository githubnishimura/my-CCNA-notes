---
title: CCNAの勉強法
---


45分学習の基本型（毎日同じ）
| 時間     | 内容               |
| ------ | ---------------- |
| 0–5分   | 前回の章の太字・図を見返す    |
| 5–25分  | 今日の該当章を読む        |
| 25–40分 | config／用語をメモ     |
| 40–45分 | 「案件だとどこで使う？」を考える |


10週間ロードマップ（あなたの目次対応版）
Week 1：NW全体像（設計書が読める土台）
📘 該当章
第1章 ネットワークの基礎

🎯 案件での意味
物理構成図／論理構成図の理解
L2 / L3 / L4 の役割

✔ 重点
OSI参照モデル / TCP・UDP / Ethernet

🔎 Cisco公式との対応
この週は config を見ない
見るのはこれだけ👇

「図」と「用語の使い方」

🔍 検索ワード
Cisco OSI model
Cisco TCP IP model overview

📌 案件での効き方
設計書レビュー時に
「ここL2？L3？」が即判断できる

Week 2：ルータ初期設定（config耐性をつける）
📘 該当章
第2章 Ciscoルータの初期設定

🎯 案件直結
初期構築手順書
config作成・レビュー

✔ 押さえる
hostname
interface
ip address
no shutdown

🔎 Cisco公式対応（★最重要）
Cisco IOS basic configuration example

📌 見るconfigの範囲
hostname
interface GigabitEthernet
ip address
no shutdown

📌 案件視点
**「これはお決まりの初期設定だな」**と分かる
configレビューでビビらなくなる


Week 3：ルーティング基礎（論理構成図）
📘 該当章
第3章 ルータの機能とルーティング

🎯 案件直結
L3論理構成図
疎通設計

✔ 押さえる
直結ルート
スタティックルート
ルーティングテーブル

🔎 Cisco公式対応
Cisco static route configuration example
show ip route Cisco

📌 見るポイント
ip route
show ip route

📌 案件での使いどころ
ping通らない原因説明
試験仕様書の疎通条件


Week 4：OSPF（案件頻出）
📘 該当章
第4章 OSPF
🎯 案件直結
動的ルーティング設計
試験項目（経路切替）

✔ 見るポイント
router ospf
network
area
※ 完璧理解不要。「何をしているか」わかればOK


🔎 Cisco公式対応（★超重要）
Cisco OSPF configuration example
single area OSPF Cisco IOS

📌 見るconfig
router ospf
router-id
network
area

📌 案件評価ポイント
「OSPF使ってます」の意味が説明できる
障害時の経路切替が想像できる


🟦 Week 5：ACL（疎通トラブルの核心）
📘 該当章
第5章 ACL
🎯 案件直結
通信不可の切り分け
FW／アクセス制御

✔ 最重要
標準ACL / 拡張ACL
permit / deny の順序

🔎 Cisco公式対応（★必須）
Cisco extended ACL configuration example

📌 見るポイント
ip access-list
permit
deny
interface

📌 案件での実感
「ACLで落ちてるかも」が言える
試験で“通らない理由”を説明できる


🟦 Week 6：NAT・DHCP・DNS（試験設計）
📘 該当章
第6章 NAT・DHCP・DNS
🎯 案件直結
試験手順書
利用者疎通確認

✔ 見るポイント
DHCPの流れ
NATの役割

🔎 Cisco公式対応
Cisco NAT configuration example
Cisco DHCP server configuration example

📌 案件視点
「IP配られてない？」
「外に出られない？」の切り分け


Week 7：L2設計（パラメータシートの核）
📘 該当章
第7章 Catalystスイッチの基本設定とVLAN
🎯 案件直結
VLAN設計
パラメータシート作成

✔ config視点
vlan
switchport mode access
switchport trunk

🔎 Cisco公式対応（★最重要）
Cisco VLAN configuration example
switchport access trunk Cisco

📌 見るconfig
vlan
switchport mode access
switchport mode trunk

📌 案件での評価
VLAN表が理解できる
物理接続と論理がつながる

Week 8：冗長構成（現場評価が高い）
📘 該当章
第8章 STP
第9章 EtherChannel

🎯 案件直結
冗長設計説明
障害時の挙動

✔ 用語
Root Bridge
Blocking / Forwarding
ポート束ね

🔎 Cisco公式対応
Cisco STP configuration example
Cisco EtherChannel configuration example

📌 案件視点
「なぜ二重接続してもループしないか」説明できる

🟦 Week 9：運用・管理・IPv6（流し読み）
📘 該当章
第10章 IPv6
第11章 その他のIPサービスと運用
第12章 デバイスの管理

🎯 案件直結
運用設計書
障害時調査

✔ 押さえる
show コマンド
ログ・SNMP・NTP

🔎 Cisco公式対応
show command Cisco IOS
Cisco SNMP syslog configuration example

📌 目的
運用担当との会話についていく


🟦 Week 10：全体像・＋α（評価される知識）
📘 該当章
第13章 ネットワークアーキテクチャ
第14章 セキュリティ
第15章 ワイヤレスLAN
第16章 SDNとネットワークの自動化

🎯 目的
面接・設計レビュー対応
「知らない」→「聞いたことある」状態
※ 暗記不要、概要理解のみ

🔎 Cisco公式対応
Cisco network architecture overview
Cisco SDN overview
Cisco wireless LAN basic

📌 ポイント
config暗記不要
単語を聞いて顔が浮かぶ状態

🧠 まとめ（超重要）
Cisco公式は
👉 Week2〜7だけ本気
👉 それ以外は「見たことある」でOK


－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－
 **「Week2〜7だけ抜いた／案件で“これ知ってると助かる”configチートシート」** 
－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－

> 目的
> * 暗記しない
> * **見た瞬間「何してるか説明できる」状態**
> * 詳細設計／パラメータシート／configレビュー対応

---

# 🧠 案件チートシート（Week2〜7）

---

## 🟦 Week2：ルータ初期設定（最初に必ず見る）

### 📌 何のため？

* 初期構築手順書
* configレビュー
* 障害時「最低限動いてるか」確認

### 🧾 config骨子

```text
hostname R1

interface GigabitEthernet0/0
 ip address 192.168.1.1 255.255.255.0
 no shutdown
```

### 🧠 案件での説明フレーズ

> 「ルータの名前を設定して、
> インタフェースにIPを振って有効化しています」

### 🔎 よく見るshow

```text
show running-config
show ip interface brief
```

---

## 🟦 Week3：スタティックルート（疎通設計の芯）

### 📌 何のため？

* L3論理構成図
* 疎通確認
* pingが通らない原因切り分け

### 🧾 config骨子

```text
ip route 0.0.0.0 0.0.0.0 192.168.1.254
```

### 🧠 案件での説明フレーズ

> 「このルータで知らない宛先は
> 次はこのルータに投げます」

### 🔎 よく見るshow

```text
show ip route
```

---

## 🟦 Week4：OSPF（案件頻出・理解でOK）

### 📌 何のため？

* 動的ルーティング
* 経路切替試験
* 冗長構成

### 🧾 config骨子

```text
router ospf 1
 router-id 1.1.1.1
 network 192.168.1.0 0.0.0.255 area 0
```

### 🧠 案件での説明フレーズ

> 「OSPFでこのネットワークを
> area0 に参加させています」

### 🔎 よく見るshow

```text
show ip ospf neighbor
show ip route ospf
```

---

## 🟦 Week5：ACL（通信不可の8割はココ）

### 📌 何のため？

* 通らない原因の切り分け
* セキュリティ設計
* 試験項目

### 🧾 config骨子（拡張ACL）

```text
ip access-list extended TEST_ACL
 permit tcp 192.168.1.0 0.0.0.255 any eq 80
 deny ip any any
```

### 🧾 インタフェース適用

```text
interface GigabitEthernet0/0
 ip access-group TEST_ACL in
```

### 🧠 案件での説明フレーズ

> 「HTTPだけ通して、それ以外は遮断しています」

### 🔎 注意点（超重要）

* **上から順に評価**
* 最後は暗黙の deny

---

## 🟦 Week6：NAT／DHCP（利用者疎通）

---

### ▶ NAT（外に出られないとき）

```text
ip nat inside source list 1 interface GigabitEthernet0/1 overload

access-list 1 permit 192.168.1.0 0.0.0.255
```

```text
interface GigabitEthernet0/0
 ip nat inside

interface GigabitEthernet0/1
 ip nat outside
```

🧠 説明フレーズ

> 「内部アドレスを外部IPに変換しています」

---

### ▶ DHCP（IP配られないとき）

```text
ip dhcp pool LAN_POOL
 network 192.168.1.0 255.255.255.0
 default-router 192.168.1.1
 dns-server 8.8.8.8
```

🧠 説明フレーズ

> 「端末にIPアドレスを自動配布しています」

---

## 🟦 Week7：VLAN（パラメータシートの核心）

### 📌 何のため？

* VLAN設計
* ポート割り当て表
* 物理／論理の橋渡し

---

### ▶ VLAN作成

```text
vlan 10
 name SALES
```

### ▶ アクセスポート

```text
interface GigabitEthernet0/1
 switchport mode access
 switchport access vlan 10
```

### ▶ トランクポート

```text
interface GigabitEthernet0/24
 switchport mode trunk
```

### 🧠 案件での説明フレーズ

> 「このポートは営業LAN、
> こっちはVLANを束ねて流しています」

### 🔎 よく見るshow

```text
show vlan brief
show interfaces trunk
```

---

# 🎯 このチートシートの正しい使い方

✅ 暗記しない
✅ 白本を読みながら
👉 **「あ、これがこのconfigか」**と対応づける
✅ 面接・現場で

> 「詳細は調べながらですが、
> 何をしているconfigかは分かります」

と言える状態を作る



