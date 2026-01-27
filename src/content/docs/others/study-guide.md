---
title: CCNAの勉強法
---

# 45分学習の基本型（毎日同じ）
| 時間     | 内容               |
| ------ | ---------------- |
| 0–5分   | 前回の章の太字・図を見返す    |
| 5–25分  | 今日の該当章を読む        |
| 25–40分 | config／用語をメモ     |
| 40–45分 | 「案件だとどこで使う？」を考える |


# 🎓 CCNA合格＆実務直結ロードマップ（全要素集約版）

## 🗓 10週間スケジュール

### 前半：ネットワークの土台を固める（Week 1 - 4）

| 週 | 対応章 | テーマ | 🎯 重点ポイント | 🛠 現場での役割（案件直結） |
| --- | --- | --- | --- | --- |
| **Week 1** | **第1章 ネットワークの基礎** | NW全体像 | OSI参照モデル / TCP・UDP / Ethernet | 構成図（物理・論理）の理解・設計書レビュー |
| **Week 2** | **第2章 Ciscoルータの初期設定** | 初期設定 | hostname / IP address / no shutdown | 初期構築手順書の作成・Config作成 |
| **Week 3** | **第3章 ルータの機能とルーティング** | ルーティング | 直結・スタティックルート / ルーティングテーブル | 疎通設計・Pingが通らない原因の切り分け |
| **Week 4** | **第4章 OSPF** | 動的ルーティング | router ospf / network / area | 経路切替試験・冗長化構成の理解 |

### 中盤：セキュリティとサービス（Week 5 - 6）

| 週 | 対応章 | テーマ | 🎯 重点ポイント | 🛠 現場での役割（案件直結） |
| --- | --- | --- | --- | --- |
| **Week 5** | **第5章 ACL** | アクセス制御 | 標準・拡張ACL / permit・denyの順序 | 通信不可の切り分け・FWセキュリティ設計 |
| **Week 6** | **第6章 NAT・DHCP・DNS** | ネットワークサービス | NAT変換 / DHCP配布 / DNSの役割 | 利用者疎通確認・「外に出られない」の調査 |

### 後半：L2設計と高度な運用（Week 7 - 10）

| 週 | 対応章 | テーマ | 🎯 重点ポイント | 🛠 現場での役割（案件直結） |
| --- | --- | --- | --- | --- |
| **Week 7** | **第7章 CatalystスイッチとVLAN** | L2設計 | vlan / accessポート / trunkポート | パラメータシート作成・VLAN設計 |
| **Week 8** | **第8章 STP / 第9章 EtherChannel** | 冗長構成 | Root Bridge / Blockingポート / ポート集約 | 障害時の挙動説明・ループ防止設計 |
| **Week 9** | **第10章 〜 第12章** | 運用・管理 | IPv6 / SNMP / Syslog / NTP / showコマンド | 運用設計書作成・ログ監視・障害調査 |
| **Week 10** | **第13章 〜 第16章** | 最新技術 | SDN / ワイヤレス / セキュリティ / 自動化 | 上流工程での会話・面接・設計レビュー対応 |

---

# 🧠 実務直結：Configチートシート（Week 2-7）

> **【活用法】** 暗記は不要。「これ、あの設定だな」と指差し確認できればOKです。

* **【Week 2：初期設定】** `hostname`, `ip address`, `no shutdown`
* **【Week 3：スタティック】** `ip route [宛先] [マスク] [次ホップ]`
* **【Week 4：OSPF】** `router ospf [ID]`, `network [NW] [ワイルドカード] area [ID]`
* **【Week 5：ACL】** `access-list [番号] permit/deny ...` → `ip access-group [名] in/out`
* **【Week 6：DHCP】** `ip dhcp pool [名]`, `network`, `default-router`
* **【Week 7：VLAN】** `switchport mode access/trunk`, `switchport access vlan [ID]`


### 1. 初期設定・ルーティング (Week 2-3)

```cisco
! --- 初期設定 ---
hostname R1
interface Gi0/0
 ip address 192.168.1.1 255.255.255.0
 no shutdown

! --- スタティックルート ---
ip route 0.0.0.0 0.0.0.0 192.168.1.254  ! デフォルトゲートウェイの設定

```

* **現場の一言：** 「とりあえず名前つけて、IP振って、外への出口を教えました！」

### 2. OSPF・ACL (Week 4-5)

```cisco
! --- OSPF ---
router ospf 1
 network 192.168.1.0 0.0.0.255 area 0

! --- 拡張ACL ---
ip access-list extended ALLOW_WEB
 permit tcp any any eq 80   ! WEB通信(80)だけ許可
 deny ip any any            ! それ以外は全部拒否（暗黙のdeny）

```

* **現場の一言：** 「OSPFで経路を自動学習させて、ACLでWEB以外の通信を絞っています」

### 3. NAT・VLAN (Week 6-7)

```cisco
! --- VLAN ---
vlan 10
 name SALES
interface Gi0/1
 switchport mode access
 switchport access vlan 10  ! 営業用VLANに所属

! --- NAT (オーバーロード) ---
ip nat inside source list 1 interface Gi0/0 overload

```

* **現場の一言：** 「Gi0/1は営業用セグメントです。外に出る時はNATでIP変換します」

---

## 🛠 現場でよく使う「調査コマンド」

トラブル時にこれらを叩ければ「分かってるな」と思われます。

| コマンド | 何がわかるか |
| --- | --- |
| `show ip interface brief` | 各ポートのIPとUP/DOWN状態が一覧でわかる |
| `show ip route` | どこにパケットを送ろうとしているか（地図） |
| `show vlan brief` | どのポートがどのVLANに属しているか |
| `show ip ospf neighbor` | 隣のルータと仲良くなっているか（通信できているか） |

---

### 🎯 このロードマップの正しい使い方

1. **「Week 2〜7」のConfig**が出てきたら、特に重点的に手を動かして覚える。
2. それ以外の章（1, 8〜16）は、まずは「用語を聞いて、図が頭に浮かぶ」状態をゴールにする。
3. 学習の最後5分で、右端の**「現場での役割」**を読み返し、将来の自分をイメージする。
