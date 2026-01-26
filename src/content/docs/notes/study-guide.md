---
title: CCNAの勉強法
---

CCNAの学習ロードマップとチートシートですね。内容が非常に実践的で素晴らしいので、**「パッと見て重要度がわかる」「スマホでも読みやすい」「実務との繋がりが直感的に入る」**ように構成を整理しました。

---

# 🎓 CCNA合格＆実務直結ロードマップ（10週間）

## ⏱ 黄金の45分ルーチン

毎日、以下のリズムで学習を固定しましょう。

* **00-05分：** 前日の復習（太字と図を眺めるだけ）
* **05-25分：** 本日の章を読解
* **25-40分：** **Config・用語**を書き出し（チートシート作成）
* **40-45分：** 「現場のどの作業で使うか？」を妄想する

---

## 🗓 学習スケジュール

### 前半：土台作り（Week 1 - 4）

| 週 | テーマ | 重点ポイント | 現場での役割 |
| --- | --- | --- | --- |
| **Week 1** | **NW全体像** | OSI参照モデル / TCP・UDP | 設計書（構成図）の理解 |
| **Week 2** | **初期設定** | hostname / IP address / no shut | 初期構築・Config作成 |
| **Week 3** | **ルーティング** | スタティックルート / ルーティングテーブル | 疎通設計・Ping不可の調査 |
| **Week 4** | **OSPF** | Area / Neighbor / 経路切替 | 動的ルーティング・冗長化試験 |

### 中盤：最重要・実務の核心（Week 5 - 8）

| 週 | テーマ | 重点ポイント | 現場での役割 |
| --- | --- | --- | --- |
| **Week 5** | **ACL** | permit / deny の順序・適用方向 | 許可・拒否の切り分け |
| **Week 6** | **NAT / DHCP** | アドレス変換・IP自動配布 | 利用者端末の疎通確認 |
| **Week 7** | **VLAN** | Access / Trunk ポート | パラメータシート作成 |
| **Week 8** | **冗長化(STP)** | Root Bridge / Blocking Port | ループ防止・障害時の挙動 |

### 後半：仕上げ（Week 9 - 10）

| 週 | テーマ | 重点ポイント | 現場での役割 |
| --- | --- | --- | --- |
| **Week 9** | **運用・管理** | SNMP / Syslog / show系コマンド | 運用保守・障害調査 |
| **Week 10** | **最新技術** | SDN / ワイヤレス / セキュリティ | 面接・上流工程の会話 |

---

# 🧠 実務直結：Configチートシート（Week 2-7）

> **【活用法】** 暗記は不要。「これ、あの設定だな」と指差し確認できればOKです。

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


