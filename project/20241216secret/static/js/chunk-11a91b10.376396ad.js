(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
	["chunk-11a91b10"], {
		"1e4b": function(s, t, e) {
			"use strict";
			e.r(t);
			var i = function() {
					var s = this,
						t = s._self._c;
					return t("div", {
						staticClass: "page pagecont"
					}, [t("img", {
						staticStyle: {
							display: "none",
							opacity: "0",
							position: "absolute",
							left: "-99999px"
						},
						attrs: {
							src: e("57a4"),
							alt: ""
						}
					}), t("img", {
						staticStyle: {
							display: "none",
							opacity: "0",
							position: "absolute",
							left: "-99999px"
						},
						attrs: {
							src: e("3256"),
							alt: ""
						}
					}), t("div", {
						staticClass: "intmov",
						attrs: {
							id: "intmov"
						}
					}, [s._m(0), t("div", {
						staticClass: "sec1_box_tit"
					}, [s._m(1), t("div", {
						staticClass: "login_bgs"
					}, [s.haslogin ? t("div", {
						staticClass: "login_myinfo"
					}, [s._v(s._s(s.myinfos.phone || s.myinfos.nickname || "冒险者") + " "), t("span", {
						on: {
							click: s.logOut
						}
					}, [s._v("退出")])]) : t("div", {
						staticClass: "login_btn",
						on: {
							click: s.loginChoose
						}
					})])]), t("div", {
						staticClass: "icon_sbg"
					}, [t("div", {
						staticClass: "icon_share mr5",
						on: {
							click: s.sharePage2Friend
						}
					}), t("div", {
						staticClass: "icon_sen mr5",
						on: {
							click: s.eachCardRes
						}
					}), t("div", {
						staticClass: "icon_pay mr5",
						on: {
							click: s.playAudio
						}
					}, [s.isAudioplay ? t("div", {
						staticClass: "icon_pay_act"
					}) : s._e()]), t("div", {
						staticClass: "icon_web mr5",
						on: {
							click: s.shareGetFF14
						}
					})]), t("div", {
						staticClass: "logo"
					}), t("div", {
						staticClass: "sec1_start_wap"
					}, [t("div", {
						staticClass: "sec1_start",
						style: {
							mask: `url(${s.sec1_n1src}) no-repeat center / cover`,
							"-webkit-mask": `url(${s.sec1_n1src}) no-repeat center / cover`
						},
						on: {
							click: s.startFun
						}
					}), s.haslogin ? s._e() : t("div", {
						staticClass: "sec1_text_start"
					}, [s._v("点击开始占星")]), s.haslogin && null != s.myinfos ? t("div", {
						staticClass: "sec1_text_start"
					}, [s._v(" 点击开始占星（剩余：" + s._s(s.myinfos.astrologyLastNum) + "次）")]) : s._e()]), t("div", {
						staticClass: "sec1_list",
						on: {
							click: s.starListFun
						}
					}), t("div", {
						staticClass: "sec1_task",
						on: {
							click: s.starTaskFun
						}
					}), t("div", {
						staticClass: "rulecls",
						on: {
							click: function(t) {
								s.showrule = !0
							}
						}
					}, [t("div", {
						staticClass: "rule_icon"
					}), t("div", {
						staticClass: "text"
					}, [s._v("占星规则")])])]), t("div", {
						staticClass: "sec2"
					}, [t("div", {
						ref: "sec3_cards",
						staticClass: "sec3_cards"
					}), t("div", {
						ref: "roade",
						staticClass: "roade"
					}), t("div", {
						ref: "sec2_pop",
						staticClass: "sec2_pop"
					}), t("div", {
						ref: "sec2_text_line",
						staticClass: "sec2_text_line"
					}, [t("p", {
						ref: "sec2_p1",
						staticClass: "sec2_p1"
					}, [s._v("你或将面临一些抉择")]), t("p", {
						ref: "sec2_p2",
						staticClass: "sec2_p2"
					}, [s._v("过去的真相、现在的方向、未来的可能...... ")]), t("p", {
						ref: "sec2_p3",
						staticClass: "sec2_p3"
					}, [s._v("旅途在即，不妨稍作驻足，获得一份启示 。")]), t("p", {
						ref: "sec2_p4",
						staticClass: "sec2_p4"
					}, [s._v("天星会予你解惑")])]), t("div", {
						ref: "sec2_txt_bg",
						staticClass: "sec2_txt_bg",
						on: {
							click: s.nextFun
						}
					}, [t("p", [s._v("我将从交错的天星中，为你寻得问题的答案。")]), t("div", {
						ref: "sec2_next_box",
						staticClass: "sec2_next_box",
						on: {
							click: s.nextFun
						}
					}, [t("div", {
						staticClass: "sec2_next"
					}), t("div", {
						staticClass: "sec2_texts"
					}, [s._v("点击继续")]), t("div", {
						staticClass: "sec2_next_arr"
					})])]), t("div", {
						ref: "sec3_tit_box",
						staticClass: "sec3_tit_box"
					}, [t("div", {
						staticClass: "sec3_tit"
					}), t("div", {
						staticClass: "sec3_des"
					}, [t("p", {
						staticClass: "p1"
					}, [s._v("请输入占星对象的姓名或昵称")]), t("p", {
						staticClass: "p2"
					}, [s._v("字数(" + s._s(s.surName.length) + "/6)")]), t("div", {
						staticClass: "sec3_txt_bg"
					}, [t("el-input", {
						ref: "surNameRef",
						attrs: {
							maxlength: "6",
							center: "",
							type: "textarea",
							placeholder: "点击输入"
						},
						model: {
							value: s.surName,
							callback: function(t) {
								s.surName = t
							},
							expression: "surName"
						}
					})], 1), t("div", {
						staticClass: "sec3_confirm",
						on: {
							click: s.nkNameFun
						}
					}), s.ckloadingsurName ? t("div", {
						staticClass: "sec3_text_confirm"
					}, [s._v("昵称校验中···")]) : t("div", {
						staticClass: "sec3_text_confirm"
					}, [t("p", [s._v("*输入内容请遵循相关法律法规、国家政策；")]), t("p", [s._v("*请勿发布违背主流价值观和社会道德准则的内容；")]), t("p", [s._v("*本页面不会记录您的个人信息。")])])])]), t("div", {
						ref: "sec4_box_star",
						staticClass: "sec4_box_star"
					}, [t("div", {
						ref: "sec4_star_bg",
						staticClass: "sec4_star_bg"
					}), t("div", {
						staticClass: "time_btns"
					}, [t("div", {
						ref: "sec4_title",
						staticClass: "sec4_title"
					}), t("div", {
						ref: "sec4_choose",
						staticClass: "sec4_choose"
					}, [t("div", {
						staticClass: "sec4_t_arr"
					})]), t("div", {
						ref: "sec4_btn_top",
						staticClass: "sec4_btn sec4_btn_top",
						class: {
							sec4_mask: "w" == s.surTime
						}
					}, [t("div", {
						staticClass: "sec4_mask_top",
						style: {
							mask: `url(${s.sec1_n1src}) no-repeat center / cover`,
							"-webkit-mask": `url(${s.sec1_n1src}) no-repeat center / cover`
						}
					}), t("div", {
						ref: "sec4_w",
						staticClass: "sec4_w"
					}), t("div", {
						staticClass: "mask_start_red",
						on: {
							click: function(t) {
								return s.selectTimeFun("w")
							}
						}
					})]), t("div", {
						ref: "sec4_btn_left",
						staticClass: "sec4_btn sec4_btn_left",
						class: {
							sec4_mask: "n" == s.surTime
						}
					}, [t("div", {
						staticClass: "sec4_mask_left",
						style: {
							mask: `url(${s.sec1_n1src}) no-repeat center / cover`,
							"-webkit-mask": `url(${s.sec1_n1src}) no-repeat center / cover`
						}
					}), t("div", {
						ref: "sec4_n",
						staticClass: "sec4_n"
					}), t("div", {
						staticClass: "mask_start_red",
						on: {
							click: function(t) {
								return s.selectTimeFun("n")
							}
						}
					})]), t("div", {
						ref: "sec4_btn_right",
						staticClass: "sec4_btn sec4_btn_right",
						class: {
							sec4_mask: "b" == s.surTime
						}
					}, [t("div", {
						staticClass: "sec4_mask_right",
						style: {
							mask: `url(${s.sec1_n1src}) no-repeat center / cover`,
							"-webkit-mask": `url(${s.sec1_n1src}) no-repeat center / cover`
						}
					}), t("div", {
						ref: "sec4_b",
						staticClass: "sec4_b"
					}), t("div", {
						staticClass: "mask_start_red",
						on: {
							click: function(t) {
								return s.selectTimeFun("b")
							}
						}
					})])])])]), t("div", {
						staticClass: "sec_page3"
					}, [t("div", {
						staticClass: "sec_page3_cont"
					}), s._m(2), t("div", {
						staticClass: "sec5_cont"
					}, [t("div", {
						staticClass: "sec5_cont_toptxt"
					}, ["w" == s.surTime ? t("p", {
						staticClass: "p1"
					}, [s._v("你选择了【未来】的方向")]) : s._e(), "n" == s.surTime ? t("p", {
						staticClass: "p1"
					}, [s._v("你选择了【现在】的方向")]) : s._e(), "b" == s.surTime ? t("p", {
						staticClass: "p1"
					}, [s._v("你选择了【过去】的方向")]) : s._e(), t("div", {
						staticClass: "p1"
					}, [s._v("请输入要占星的内容。 "), t("span", {
						staticClass: "p2"
					}, [s._v("字数(" + s._s("···" == s.surContent ? 0 : s.surContent.length) + "/30)")])])]), t("div", {
						staticClass: "sec5_cont_conts"
					}, [t("el-input", {
						ref: "surContentRef",
						attrs: {
							maxlength: "30",
							center: "",
							type: "textarea",
							placeholder: "点击输入占星的内容"
						},
						model: {
							value: s.surContent,
							callback: function(t) {
								s.surContent = t
							},
							expression: "surContent"
						}
					}), t("div", {
						staticClass: "sec5_sz_box",
						on: {
							click: s.questionFun
						}
					}, [t("div", {
						staticClass: "sec5_sz_txt"
					}, [s._v("随机提问")]), t("div", {
						ref: "sec5_sz",
						staticClass: "sec5_sz"
					})])], 1)]), t("div", {
						staticClass: "start_box",
						on: {
							click: s.startInation
						}
					}, [t("div", {
						staticClass: "start_box_icon",
						style: {
							mask: `url(${s.sec1_n1src}) no-repeat center / cover`,
							"-webkit-mask": `url(${s.sec1_n1src}) no-repeat center / cover`
						}
					}), t("div", {
						staticClass: "sec5_txt"
					}), s.ckloadingsurContent ? t("div", {
						staticClass: "tips"
					}, [s._v("内容校验中···")]) : s._e()])]), t("div", {
						staticClass: "card_page"
					}, [t("div", {
						ref: "card_roade",
						staticClass: "card_roade"
					}), t("div", {
						ref: "card_pop",
						staticClass: "card_pop"
					}), t("div", {
						ref: "card_txt",
						staticClass: "card_txt"
					}, [t("p", [s._v("我将使用“三位一体”的方法，为您揭示十二神的指引。")])]), t("div", {
						ref: "cards_boxs",
						staticClass: "cards_boxs"
					}, [t("div", {
						ref: "card0",
						staticClass: "card card0",
						class: {
							act: s.iscard0
						},
						on: {
							click: function(t) {
								return s.chooseCard(0)
							}
						}
					}), t("div", {
						ref: "card1",
						staticClass: "card card1",
						class: {
							act: s.iscard1
						},
						on: {
							click: function(t) {
								return s.chooseCard(1)
							}
						}
					}), t("div", {
						ref: "card2",
						staticClass: "card card2",
						class: {
							act: s.iscard2
						},
						on: {
							click: function(t) {
								return s.chooseCard(2)
							}
						}
					}), t("div", {
						ref: "card3",
						staticClass: "card card3",
						class: {
							act: s.iscard3
						},
						on: {
							click: function(t) {
								return s.chooseCard(3)
							}
						}
					}), t("div", {
						ref: "card4",
						staticClass: "card card4",
						class: {
							act: s.iscard4
						},
						on: {
							click: function(t) {
								return s.chooseCard(4)
							}
						}
					}), t("div", {
						ref: "card5",
						staticClass: "card card5",
						class: {
							act: s.iscard5
						},
						on: {
							click: function(t) {
								return s.chooseCard(5)
							}
						}
					}), t("div", {
						staticClass: "card_t_arr"
					})]), t("div", {
						ref: "cards_tit",
						staticClass: "cards_tit"
					}), t("div", {
						ref: "openAnswerBoxs",
						staticClass: "openAnswerBoxs"
					}, [t("div", {
						ref: "openAnswer_title",
						staticClass: "openAnswer_title"
					}), t("div", {
						ref: "openAnswer_line",
						staticClass: "openAnswer_line"
					}, [t("div", {
						ref: "card_line1",
						staticClass: "line card_line1"
					}, [t("div", {
						staticClass: "line_card_name"
					}, [s._v("第二张牌")]), t("div", {
						staticClass: "line_boxcard"
					}, [t("div", {
						staticClass: "line_card line_rcls",
						class: {
							act: s.showcard1
						},
						on: {
							click: function(t) {
								return s.showCardFun(1)
							}
						}
					}, [t("img", {
						staticClass: "off",
						attrs: {
							src: e("57a4"),
							alt: ""
						}
					}), t("img", {
						staticClass: "on",
						attrs: {
							src: s.retcard1.mycself.cpic,
							alt: ""
						}
					})])]), t("div", {
						ref: "sec8_txtbox1",
						staticClass: "sec8_txtbox"
					}, [t("div", {
						staticClass: "sec8_txt1"
					}, [s._v(s._s("f" == s.retcard1.sizeType ? "正位" : "逆位"))]), t("div", {
						staticClass: "sec8_txt2"
					}, [s._v(s._s(s.retcard1.cname))]), t("div", {
						staticClass: "sec8_txt3"
					}, [s._v(s._s(s.retcard1.mycself.min))])]), t("div", {
						ref: "sec8_top_arrbox1",
						staticClass: "sec8_top_arrbox"
					}, [t("div", {
						staticClass: "sec8_top_arr"
					})])]), t("div", {
						ref: "card_line2",
						staticClass: "line card_line2"
					}, [t("div", {
						staticClass: "line_card_name"
					}, [s._v("第一张牌")]), t("div", {
						staticClass: "line_boxcard"
					}, [t("div", {
						staticClass: "line_card",
						class: {
							act: s.showcard2
						},
						on: {
							click: function(t) {
								return s.showCardFun(2)
							}
						}
					}, [t("img", {
						staticClass: "off",
						attrs: {
							src: e("57a4"),
							alt: ""
						}
					}), t("img", {
						staticClass: "on",
						attrs: {
							src: s.retcard2.mycself.cpic,
							alt: ""
						}
					})])]), t("div", {
						ref: "sec8_txtbox2",
						staticClass: "sec8_txtbox"
					}, [t("div", {
						staticClass: "sec8_txt1"
					}, [s._v(s._s("f" == s.retcard2.sizeType ? "正位" : "逆位"))]), t("div", {
						staticClass: "sec8_txt2"
					}, [s._v(s._s(s.retcard2.cname))]), t("div", {
						staticClass: "sec8_txt3"
					}, [s._v(s._s(s.retcard2.mycself.min))])]), t("div", {
						ref: "sec8_top_arrbox2",
						staticClass: "sec8_top_arrbox"
					}, [t("div", {
						staticClass: "sec8_top_arr"
					})])]), t("div", {
						ref: "card_line3",
						staticClass: "line card_line3"
					}, [t("div", {
						staticClass: "line_card_name"
					}, [s._v("第三张牌")]), t("div", {
						staticClass: "line_boxcard"
					}, [t("div", {
						staticClass: "line_card",
						class: {
							act: s.showcard3
						},
						on: {
							click: function(t) {
								return s.showCardFun(3)
							}
						}
					}, [t("img", {
						staticClass: "off",
						attrs: {
							src: e("57a4"),
							alt: ""
						}
					}), t("img", {
						staticClass: "on",
						attrs: {
							src: s.retcard3.mycself.cpic,
							alt: ""
						}
					})])]), t("div", {
						ref: "sec8_txtbox3",
						staticClass: "sec8_txtbox"
					}, [t("div", {
						staticClass: "sec8_txt1"
					}, [s._v(s._s("f" == s.retcard3.sizeType ? "正位" : "逆位"))]), t("div", {
						staticClass: "sec8_txt2"
					}, [s._v(s._s(s.retcard3.cname))]), t("div", {
						staticClass: "sec8_txt3"
					}, [s._v(s._s(s.retcard3.mycself.min))])]), t("div", {
						ref: "sec8_top_arrbox3",
						staticClass: "sec8_top_arrbox"
					}, [t("div", {
						staticClass: "sec8_top_arr"
					})])]), t("div", {
						staticClass: "sec8_txt4 sec8_txt41"
					}, [t("div", {
						staticClass: "sec9_txt_top"
					}), t("div", {
						staticClass: "sec9_txt_cent"
					}, [t("div", {
						staticClass: "txt_t"
					}, [t("span", [s._v("过去：")]), s._v(s._s(s.retcard1.mycread.more) + " ")])]), t("div", {
						staticClass: "sec9_txt_bottom"
					})]), t("div", {
						staticClass: "sec8_txt4 sec8_txt42"
					}, [t("div", {
						staticClass: "sec9_txt_top"
					}), t("div", {
						staticClass: "sec9_txt_cent"
					}, [t("div", {
						staticClass: "txt_t"
					}, [t("span", [s._v("现在：")]), s._v(s._s(s.retcard2.mycread.more) + " ")])]), t("div", {
						staticClass: "sec9_txt_bottom"
					})]), t("div", {
						staticClass: "sec8_txt4 sec8_txt43"
					}, [t("div", {
						staticClass: "sec9_txt_top"
					}), t("div", {
						staticClass: "sec9_txt_cent"
					}, [t("div", {
						staticClass: "txt_t"
					}, [t("span", [s._v("未来：")]), s._v(s._s(s.retcard3.mycread.more) + " ")])]), t("div", {
						staticClass: "sec9_txt_bottom"
					})])]), t("div", {
						ref: "sec8_btn",
						staticClass: "sec8_btn",
						on: {
							click: s.openMyAnswerFun
						}
					})])]), t("div", {
						staticClass: "last_page"
					}, [t("div", {
						staticClass: "sec9_bottom"
					}, [t("div", {
						staticClass: "infos"
					}, [t("div", {
						staticClass: "sec9_web",
						on: {
							click: s.shareGetFF14
						}
					}), t("div", {
						staticClass: "user"
					}, [t("span", [s._v(s._s(s.surName))]), s._v("的占星内容：" + s._s(s.surContent))]), t("div", {
						staticClass: "sec9_txt_top"
					}), t("div", {
						staticClass: "sec9_txt_cent"
					}, [t("div", {
						staticClass: "txt_t ft24"
					}, [t("span", [s._v("答案：")]), s._v(s._s(s.surMySelect.mycread.ans))]), t("div", {
						staticClass: "txt_c"
					}, [t("span", [s._v("解读：")]), s._v(s._s(s.surMySelect.mycread.more))])]), t("div", {
						staticClass: "sec9_txt_bottom"
					}), t("div", {
						staticClass: "sec9_btnshare",
						on: {
							click: function(t) {
								return s.creatShareFun("me")
							}
						}
					})])]), t("div", {
						staticClass: "sec9_tits"
					}), t("div", {
						staticClass: "sec9_1card"
					}, [t("img", {
						attrs: {
							src: s.shareSelect1.mycself.cpic,
							alt: ""
						}
					})]), t("div", {
						staticClass: "sec9_3card"
					}, [t("img", {
						attrs: {
							src: s.shareSelect3.mycself.cpic,
							alt: ""
						}
					})]), t("div", {
						staticClass: "sec9_card"
					}, [t("img", {
						attrs: {
							src: s.surMySelect.mycself.cpic,
							alt: ""
						}
					})]), t("div", {
						staticClass: "sec9_histy",
						on: {
							click: s.secRefsh
						}
					}), t("div", {
						staticClass: "sec9_back"
					}, [t("div", {
						staticClass: "lf",
						on: {
							click: s.sec9Back
						}
					}), t("div", {
						staticClass: "rt",
						on: {
							click: s.secRefsh
						}
					})])]), t("div", {
						ref: "lookAnswerList",
						staticClass: "lookAnswerList"
					}, [t("div", {
						staticClass: "lookAnswerList_box"
					}, [t("div", {
						staticClass: "back_btn",
						on: {
							click: s.backCard
						}
					}), t("div", {
						staticClass: "sec8_2_title"
					}), t("div", {
						staticClass: "sec8_2_title_des"
					}, [s._v("通过占星可点亮卡牌")]), t("div", {
						staticClass: "lookAnswerCont"
					}, s._l(s.ansAllCard, (function(e, i) {
						return t("div", {
							key: i,
							staticClass: "lookitem"
						}, [t("div", {
							staticClass: "pic"
						}, [t("img", {
							staticClass: "on",
							attrs: {
								src: e.cpic,
								alt: ""
							}
						})]), t("div", {
							staticClass: "cont"
						}, [t("div", {
							staticClass: "uname"
						}, [s._v(s._s(e.uname) + "【" + s._s(e.subtit) + "】")]), t("div", {
							staticClass: "title"
						}, [s._v(s._s(e.min))]), t("div", {
							staticClass: "sec8_2_txt_t"
						}), t("div", {
							staticClass: "sec8_2_txt_c"
						}, [s._v(s._s(e.des))]), t("div", {
							staticClass: "sec8_2_txt_b"
						})]), e.ishas ? s._e() : t("div", {
							staticClass: "look_mask_item"
						})])
					})), 0)])]), t("div", {
						ref: "imgContainer",
						staticClass: "ff_shareWrapper"
					}, [t("img", {
						attrs: {
							src: e("735a"),
							alt: ""
						}
					}), t("div", {
						staticClass: "cards"
					}, [t("div", {
						staticClass: "cardcls card1"
					}, [t("img", {
						attrs: {
							src: s.shareSelect1.mycself.cpic,
							alt: ""
						}
					})]), t("div", {
						staticClass: "cardcls card3"
					}, [t("img", {
						attrs: {
							src: s.shareSelect3.mycself.cpic,
							alt: ""
						}
					})]), t("div", {
						staticClass: "cardcls card2"
					}, [t("img", {
						attrs: {
							src: s.shareSelect.mycself.cpic,
							alt: ""
						}
					})])]), t("div", {
						staticClass: "infos"
					}, [t("div", {
						staticClass: "user"
					}, [t("span", [s._v(s._s(s.shareSelect.surName))]), s._v("的占星内容：" + s._s(s.shareSelect.surContent))]), t("div", {
						staticClass: "sec9_txt_top"
					}), t("div", {
						staticClass: "sec9_txt_cent"
					}, [t("div", {
						staticClass: "lfcls"
					}, [t("div", {
						staticClass: "anscls"
					}, [s._v(s._s(s.shareSelect.mycread.ans))]), t("div", {
						staticClass: "name"
					}, [s._v(s._s(s.shareSelect.surName))]), t("div", {
						staticClass: "time"
					}, [s._v(s._s(s.shareSelect.dayTime))])]), t("div", {
						staticClass: "ewm"
					}, [t("div", {
						staticClass: "pic"
					}, [t("div", {
						staticClass: "ewm_w"
					}, [t("vue-qr", {
						attrs: {
							text: s.shareewmlink,
							margin: 8,
							backgroundColor: "none"
						}
					})], 1)]), t("div", {
						staticClass: "textcls"
					}, [s._v("扫码获得你的启示")])])]), t("div", {
						staticClass: "sec9_txt_bottom"
					})])]), s.showShareBox ? t("div", {
						staticClass: "sec_ewmcode"
					}, [t("div", {
						staticClass: "ewmbox"
					}, [t("div", {
						staticClass: "ewmbox_bord"
					}, [s.issharecreat ? t("div", {
						staticClass: "sharecreat"
					}, [s._v("亲爱的冒险者"), t("br"), s._v("海报生成中····")]) : t("div", {
						staticClass: "shareContCls"
					}, [t("img", {
						attrs: {
							src: s.shareimgUrl,
							alt: ""
						}
					})])]), s.issharecreat ? s._e() : t("div", {
						staticClass: "icon_close",
						on: {
							click: function(t) {
								s.showShareBox = !1
							}
						}
					}), s.issharecreat ? s._e() : t("div", ["me" == s.btntype ? t("div", {}, [s.isWeiXin() ? t("div", {
						staticClass: "meEwmSave"
					}, [s._v("长按可截图保存结果")]) : t("div", {
						staticClass: "meEwmSave webcls",
						on: {
							click: s.shareMyPic
						}
					})]) : s._e(), "other" == s.btntype ? t("div", {}, [t("div", {
						staticClass: "sec_share_get",
						on: {
							click: function(t) {
								s.showShareBox = !1
							}
						}
					})]) : s._e()])])]) : s._e(), t("audio", {
						ref: "audioAuto",
						staticStyle: {
							display: "none"
						},
						attrs: {
							id: "audioAuto",
							loop: "",
							autoplay: "autoplay",
							preload: "auto"
						}
					}, [t("source", {
						attrs: {
							src: "https://static.web.sdo.com/jijiamobile/pic/ff14/20241113ination/zvid1230.MP3",
							type: "audio/mpeg"
						}
					})]), t("div", {
						staticClass: "maskImgLoad"
					}, [t("div", {
						staticClass: "maskBoxLoad"
					}, [t("div", {
						staticClass: "sp-spriteMogu"
					}), t("div", {
						staticClass: "sp-loadnum"
					}, [s._v(s._s(s.loadingprogress) + "%")])])]), s.showlogin ? t("div", {
						staticClass: "phoneLoginBox"
					}, [t("div", {
						staticClass: "upBox"
					}, [t("div", {
						staticClass: "item"
					}, [s._m(3), t("div", {
						staticClass: "rt"
					}, [t("el-input", {
						attrs: {
							placeholder: "请输入手机号",
							maxlength: "11"
						},
						on: {
							focus: s.focusFun
						},
						model: {
							value: s.inpPhone,
							callback: function(t) {
								s.inpPhone = "string" === typeof t ? t.trim() : t
							},
							expression: "inpPhone"
						}
					})], 1)]), t("div", {
						staticClass: "item"
					}, [s._m(4), t("div", {
						staticClass: "rt rtcode"
					}, [t("div", {
						staticClass: "codeVal"
					}, [t("el-input", {
						attrs: {
							placeholder: "请输入手机验证码"
						},
						model: {
							value: s.inpCode,
							callback: function(t) {
								s.inpCode = "string" === typeof t ? t.trim() : t
							},
							expression: "inpCode"
						}
					})], 1), t("div", {
						staticClass: "codeSend comBotton",
						class: s.codeis ? "" : "act",
						on: {
							click: s.sendCode
						}
					}, [s._v(" " + s._s(s.codeName) + " ")])])]), t("el-button", {
						staticClass: "log_btns",
						attrs: {
							loading: s.loginLoading
						},
						on: {
							click: s.phoneUpLoginFun
						}
					}, [s._v("登录")]), t("div", {
						staticClass: "icon_close",
						on: {
							click: s.closeShowlogin
						}
					})], 1)]) : s._e(), s.ismaskShare ? t("div", {
						staticClass: "maskShare",
						on: {
							click: function(t) {
								s.ismaskShare = !1
							}
						}
					}, [t("div", {
						staticClass: "cont"
					})]) : s._e(), t("el-dialog", {
						staticClass: "prod_boxCls prod_histlist_cls",
						attrs: {
							width: "8.95rem",
							visible: s.isstarList,
							"show-close": !1,
							"append-to-body": ""
						},
						on: {
							"update:visible": function(t) {
								s.isstarList = t
							}
						}
					}, [t("div", {
						staticClass: "pop_list"
					}, [t("div", {
						staticClass: "hist_list"
					}, s._l(s.starListArr, (function(e, i) {
						return t("div", {
							key: i,
							staticClass: "hist_item",
							on: {
								click: function(t) {
									return s.lookMeHist(e)
								}
							}
						}, [t("div", {
							staticClass: "lf"
						}, [t("div", {
							staticClass: "time"
						}, [s._v(s._s(e.created_at))]), t("div", {
							staticClass: "name"
						}, [s._v(s._s(e.target_name))])]), t("div", {
							staticClass: "rt"
						}, [s._v("查看详情")])])
					})), 0), t("div", {
						staticClass: "pop_cloes",
						on: {
							click: function(t) {
								s.isstarList = !1
							}
						}
					})])]), t("el-dialog", {
						staticClass: "prod_boxCls prod_task_cls",
						attrs: {
							width: "8.95rem",
							visible: s.isstarTask,
							"show-close": !1,
							"append-to-body": ""
						},
						on: {
							"update:visible": function(t) {
								s.isstarTask = t
							}
						}
					}, [t("div", {
						staticClass: "task_list"
					}, [t("div", {
						staticClass: "task_cont"
					}, [t("div", {
						staticClass: "hist_item"
					}, [t("div", {
						staticClass: "lf"
					}, [t("div", {
						staticClass: "name"
					}, [s._v("关注Cindy-Mater谢谢喵")])]), s.task1.status ? t("div", {
						staticClass: "rt act"
					}, [s._v("已完成")]) : t("div", {
						staticClass: "rt",
						on: {
							click: s.sharePage2Friend
						}
					}, [s._v("去完成")])]), t("div", {
						staticClass: "hist_item"
					}, [t("div", {
						staticClass: "lf"
					}, [t("div", {
						staticClass: "name"
					}, [s._v("关注幻想BOT谢谢喵")])]), s.task2.status ? t("div", {
						staticClass: "rt act"
					}, [s._v("已完成")]) : t("div", {
						staticClass: "rt",
						on: {
							click: function(t) {
								s.isstarTask = !1
							}
						}
					}, [s._v("去完成")])]), t("div", {
						staticClass: "hist_item"
					}, [t("div", {
						staticClass: "lf"
					}, [t("div", {
						staticClass: "name"
					}, [s._v("打一辈子《最终幻想14》")])]), s.task3.status ? t("div", {
						staticClass: "rt act"
					}, [s._v("已完成")]) : t("div", {
						staticClass: "rt",
						on: {
							click: function(t) {
								s.isstarTask = !1
							}
						}
					}, [s._v("去完成")])]), t("div", {
						staticClass: "hist_item"
					}, [t("div", {
						staticClass: "lf"
					}, [t("div", {
						staticClass: "name"
					}, [s._v("了解《最终幻想14》")])]), s.task4.status ? t("div", {
						staticClass: "rt act"
					}, [s._v("已完成")]) : t("div", {
						staticClass: "rt",
						on: {
							click: s.shareGetFF14
						}
					}, [s._v("去完成")])]), t("div", {
						staticClass: "hasfinashNum"
					}, [s._v("本日已经获得次数（" + s._s(s.hasfinashNum) + "/4）")])]), t("div", {
						staticClass: "pop_cloes",
						on: {
							click: function(t) {
								s.isstarTask = !1
							}
						}
					})])]), t("el-dialog", {
						staticClass: "prod_boxCls prod_task_cls",
						attrs: {
							width: "8.95rem",
							visible: s.showrule,
							"show-close": !1,
							"append-to-body": ""
						},
						on: {
							"update:visible": function(t) {
								s.showrule = t
							}
						}
					}, [t("div", {
						staticClass: "rule_cont"
					}, [t("div", {
						staticClass: "rule_title"
					}, [s._v("占星规则")]), t("div", {
						staticClass: "rule_cents"
					}, [t("div", {
						staticClass: "r_tit"
					}, [s._v("1、活动时间：")]), t("div", {
						staticClass: "r_cent noh"
					}, [s._v(s._s(s.opentime))]), t("div", {
						staticClass: "r_tit"
					}, [s._v("2、活动介绍：")]), t("div", {
						staticClass: "r_cent noh"
					}, [s._v("活动期间，玩家可以每日登录参与网页活动，完成任务、获得占星次数、完成奥秘卡占星。占星可以点亮抽到的奥秘卡。")]), t("div", {
						staticClass: "r_tit"
					}, [s._v("3、活动规则：")]), t("div", {
						staticClass: "r_cent noh"
					}, [s._v(" *活动期间，玩家每天登录网页活动即可获得5次占星次数，每次占星随机点亮3张奥秘卡；"), t("br"), t("br"), s._v("*通过首页“每日占星任务”，可获得额外占星次数。"), t("br"), t("br"), s._v("*每日占星次数和任务将在每日00：00（服务器时间）刷新。 ")]), t("div", {
						staticClass: "r_tit"
					}, [s._v("4、参与本页面活动须知")]), t("div", {
						staticClass: "r_cent noh"
					}, [s._v(" *该活动涉及未经科学验证的现象与观点，仅供娱乐，与游戏内外实际情况无关，请注意甄别。"), t("br"), t("br"), s._v(" *本页面用户提供信息仅用作参与玩法，官方不会用作其他用途。"), t("br"), t("br"), s._v(" *涉及以下内容不可参与活动："), t("br"), s._v(" ①违反相关法律法规、国家政策规定的内容；"), t("br"), s._v(" ②带有血腥、暴力、色情、低俗以及违背社会道德准则的不和谐内容；"), t("br"), s._v(" ③恶意造谣抹黑或蓄意引起争议等其他不符合主流价值的内容；"), t("br"), s._v(" ④散布虚假不实的信息；"), t("br"), s._v(" ⑤违反以上任一规则的用户，官方有权利禁止其参与本次活动。 ")])]), t("div", {
						staticClass: "pop_cloes",
						on: {
							click: function(t) {
								s.showrule = !1
							}
						}
					})])]), t("el-dialog", {
						staticClass: "prod_boxCls prod_task_cls",
						attrs: {
							width: "8.95rem",
							visible: s.iagree,
							"show-close": !1,
							"append-to-body": ""
						},
						on: {
							"update:visible": function(t) {
								s.iagree = t
							}
						}
					}, [t("div", {
						staticClass: "rule_cont"
					}, [t("div", {
						staticClass: "rule_title"
					}, [s._v("占星须知")]), t("div", {
						staticClass: "rule_cents rule_cents_xu"
					}, [t("div", {
						staticClass: "r_cent"
					}, [s._v(" *该活动涉及未经科学验证的现象与观点，仅供娱乐，与游戏内外实际情况无关，请注意甄别。"), t("br"), t("br"), s._v(" *本页面用户提供信息仅用作参与玩法，官方不会用作其他用途。"), t("br"), t("br"), s._v(" *涉及以下内容不可参与活动："), t("br"), s._v(" ①违反相关法律法规、国家政策规定的内容；"), t("br"), s._v(" ②带有血腥、暴力、色情、低俗以及违背社会道德准则的不和谐内容；"), t("br"), s._v(" ③恶意造谣抹黑或蓄意引起争议等其他不符合主流价值的内容；"), t("br"), s._v(" ④散布虚假不实的信息；"), t("br"), s._v(" ⑤违反以上任一规则的用户，官方有权利禁止其参与本次活动。 ")]), t("div", {
						staticClass: "iagreeBox",
						on: {
							click: function(t) {
								s.iknow = !s.iknow
							}
						}
					}, [t("div", {
						staticClass: "ckcls",
						class: {
							act: s.iknow
						}
					}), t("div", {
						staticClass: "txt"
					}, [s._v("我已知晓并同意以上须知")])]), t("div", {
						staticClass: "upiagree",
						on: {
							click: s.iagreeFun
						}
					}, [t("span", [s._v("开始占星")])])]), t("div", {
						staticClass: "pop_cloes",
						on: {
							click: function(t) {
								s.iagree = !1
							}
						}
					})])]), t("div", {
						staticClass: "star_icon star_icon1"
					}), t("div", {
						staticClass: "star_icon star_icon2"
					}), t("div", {
						staticClass: "star_icon star_icon3"
					}), t("div", {
						staticClass: "star_icon star_icon4"
					}), t("div", {
						staticClass: "star_icon star_icon5"
					}), t("div", {
						staticClass: "star_icon star_icon6"
					}), t("div", {
						staticClass: "star_icon star_icon7"
					}), t("div", {
						staticClass: "star_icon star_icon8"
					}), s.showadsr ? t("div", {
						staticClass: "adsrCls"
					}, [t("div", {
						staticClass: "adsrcontCls"
					}, [t("div", {
						staticClass: "adsr_1"
					}, [t("img", {
						attrs: {
							src: e("da40"),
							alt: ""
						}
					}), t("div", {
						staticClass: "adsr_back",
						on: {
							click: function(t) {
								s.showadsr = !1
							}
						}
					})]), t("div", {
						staticClass: "adsr_2"
					}, [t("img", {
						attrs: {
							src: e("8fc2"),
							alt: ""
						}
					}), t("div", {
						staticClass: "reg_btns",
						on: {
							click: function(t) {
								return s.clickCountFun("立即注册")
							}
						}
					}, [t("a", {
						attrs: {
							href: "https://ff.web.sdo.com/web8/register.html",
							target: "_blank"
						}
					})]), t("div", {
						staticClass: "more_btns",
						on: {
							click: function(t) {
								return s.clickCountFun("了解更多")
							}
						}
					}, [t("a", {
						attrs: {
							href: "http://adrs.sdo.com/ADRefererSystem/adjump.aspx?SndaADID=25-06-02-game-647-01&RedirectUrl=http%3a%2f%2fadsrff.web.sdo.com%2fweb1%2findex.html%23%2findex",
							target: "_blank"
						}
					})])]), t("div", {
						staticClass: "adsr_3"
					}, [t("img", {
						attrs: {
							src: e("38fc"),
							alt: ""
						}
					}), t("div", {
						staticClass: "swiper2boxhome"
					}, [t("div", {
						staticClass: "swiper2home rel"
					}, [t("swiper", {
						ref: "mySwiper",
						attrs: {
							options: s.swiperOptions1
						}
					}, s._l(s.swpRet1, (function(s, e) {
						return t("div", {
							key: e,
							staticClass: "swiper-slide"
						}, [t("img", {
							attrs: {
								src: s.url
							}
						})])
					})), 0), t("div", {
						staticClass: "swiper-pagination swiper-pagination1 sec1-pagination",
						attrs: {
							slot: "pagination"
						},
						slot: "pagination"
					}), t("div", {
						staticClass: "swp_prev"
					}), t("div", {
						staticClass: "swp_next"
					})], 1)])])])]) : s._e()], 1)
				},
				a = [function() {
					var s = this,
						t = s._self._c;
					return t("div", {
						staticClass: "intmov_move",
						attrs: {
							id: "intmov_move"
						}
					}, [t("div", {
						staticClass: "dkicon"
					})])
				}, function() {
					var s = this,
						t = s._self._c;
					return t("div", {
						staticClass: "sec1_tit"
					}, [t("div", {
						staticClass: "sec1_stit"
					})])
				}, function() {
					var s = this,
						t = s._self._c;
					return t("div", {
						staticClass: "sec1_box_tit"
					}, [t("div", {
						staticClass: "sec1_tit"
					}, [t("div", {
						staticClass: "sec1_stit"
					})])])
				}, function() {
					var s = this,
						t = s._self._c;
					return t("div", {
						staticClass: "lf"
					}, [t("span", [s._v("手")]), t("span", [s._v("机")]), t("span", [s._v("号")])])
				}, function() {
					var s = this,
						t = s._self._c;
					return t("div", {
						staticClass: "lf"
					}, [t("span", [s._v("验")]), t("span", [s._v("证")]), t("span", [s._v("码")])])
				}],
				c = (e("0643"), e("2382"), e("a573"), e("4417"), e("b7ef"), e("7212")),
				r = (e("a7a3"), e("b775")),
				n = e("4328"),
				o = e.n(n),
				l = e("4ec3");
			const d = l["a"];

			function h() {
				return Object(r["a"])({
					url: d + "astrology/isLogin",
					method: "get"
				})
			}

			function p(s) {
				return Object(r["a"])({
					url: d + "common/sendMsg",
					method: "get",
					params: s
				})
			}

			function m(s) {
				return Object(r["a"])({
					url: d + "astrology/clickCount",
					method: "get",
					params: s
				})
			}

			function u(s, t) {
				return Object(r["a"])({
					url: d + "astrology/phoneLogin",
					method: "post",
					data: o.a.stringify({
						phone: s,
						verifycode: t
					})
				})
			}

			function v(s) {
				return Object(r["a"])({
					url: d + "astrology/findRecordById",
					method: "get",
					params: s
				})
			}

			function f(s) {
				return Object(r["a"])({
					url: d + "astrology/shareResult",
					method: "get",
					params: s
				})
			}

			function g(s) {
				return Object(r["a"])({
					url: d + "astrology/sharePage2Friend",
					method: "get",
					params: s
				})
			}

			function C(s) {
				return Object(r["a"])({
					url: d + "astrology/getFF14",
					method: "get",
					params: s
				})
			}

			function y(s) {
				return Object(r["a"])({
					url: d + "astrology/logOut",
					method: "get"
				})
			}

			function b() {
				return Object(r["a"])({
					url: d + "astrology/getRecordList",
					method: "get"
				})
			}

			function w(s) {
				return Object(r["a"])({
					url: d + "astrology/checkContent",
					method: "post",
					data: o.a.stringify({
						str2Check: s
					})
				})
			}

			function x(s, t, e, i) {
				return Object(r["a"])({
					url: d + "astrology/astrology",
					method: "post",
					data: o.a.stringify({
						target_name: s,
						content: t,
						result: e,
						str1: i
					})
				})
			}
			var k = e("912c"),
				$ = e("1157"),
				S = e.n($);
			e("4360"), e("56d7");
			const j = window["wx"];

			function O(s, t) {
				j.config({
					debug: !1,
					appId: s.appID,
					timestamp: s.timestamp,
					nonceStr: s.nonceStr,
					signature: s.signature,
					jsApiList: t.APIs
				}), j.ready((function() {
					L(t.callback)
				})), j.checkJsApi({
					jsApiList: t.APIs,
					success: function(s) {
						return s
					}
				})
			}

			function F(s, t, e, i) {
				var a, c, r = new XMLHttpRequest;
				r.onreadystatechange = function() {
					4 == r.readyState && 200 == r.status && i(JSON.parse(r.responseText))
				}, "GET" == s ? (a = t + "?" + e, c = null) : "POST" == s && (a = t, c = e), r.open(s, a, !0), r.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; charset=UTF-8"), r.send(c)
			}
			async function T(s) {
				F("GET", "https://weixinmir.web.sdo.com/SDGMir/inc/actff1_GetCheckInfo.php", "url=https://actff1.web.sdo.com/project/20241216secret/index.html", (function(t) {
					O(t, s)
				}))
			}

			function A(s) {
				s && T(s)
			}

			function L(s) {
				const t = s.title || "天星的奥秘 -《最终幻想14》占星小游戏",
					e = s.imgUrl || "https://static.web.sdo.com/jijiamobile/pic/ff14/20241113ination/shareicons0210.jpg",
					i = s.description || "快来测一测，获得你的启示！十二神将给予你指引！",
					a = s.url || "https://actff1.web.sdo.com/project/20241216secret/index.html",
					c = s.successMethod || "",
					r = {
						title: t,
						desc: i,
						link: a,
						imgUrl: e,
						success: c
					};
				j.updateTimelineShareData(r), j.updateAppMessageShareData(r)
			}
			var N = e("658f5"),
				V = e.n(N),
				I = e("c0e9"),
				R = e.n(I),
				M = e("5a0c"),
				z = e.n(M),
				B = e("ed08");
			const P = k["Application"],
				Y = (k["Container"], k["loader"]),
				q = k["loader"].resources,
				J = (k["utils"].TextureCache, k["Sprite"], k["Rectangle"], {
					cid: "",
					surName: "",
					surContent: "",
					cname: "",
					timeType: "",
					sizeType: "",
					dayTime: "",
					mycself: {
						min: "",
						cpic: ""
					},
					mycread: {
						ans: "",
						more: "",
						size: "",
						timeType: ""
					}
				}),
				W = {
					cname: "",
					timeType: "",
					sizeType: "",
					mycself: {
						min: "",
						cpic: ""
					},
					mycread: {
						ans: "",
						more: "",
						size: "",
						timeType: ""
					}
				};
			let X = "https://static.web.sdo.com/jijiamobile/pic/ff14/20241113ination/ivina-0.json",
				U = "https://static.web.sdo.com/jijiamobile/pic/ff14/20241113ination/ivina-1.json",
				D = "https://static.web.sdo.com/jijiamobile/pic/ff14/20241113ination/ivina-2.json",
				E = "https://static.web.sdo.com/jijiamobile/pic/ff14/20241113ination/ivina-3.json",
				H = "https://static.web.sdo.com/jijiamobile/pic/ff14/20241113ination/ivina-4.json",
				G = "https://static.web.sdo.com/jijiamobile/pic/ff14/20241113ination/ivina-5.json",
				Q = "https://static.web.sdo.com/jijiamobile/pic/ff14/20241113ination/ivina-6.json",
				K = "https://static.web.sdo.com/jijiamobile/pic/ff14/20241113ination/ivina-7.json",
				Z = "https://static.web.sdo.com/jijiamobile/pic/ff14/20241113ination/ivina-8.json",
				ss = "https://static.web.sdo.com/jijiamobile/pic/ff14/20241113ination/ivina-9.json",
				ts = "https://static.web.sdo.com/jijiamobile/pic/ff14/20241113ination/ivina-10.json",
				es = "https://static.web.sdo.com/jijiamobile/pic/ff14/20241113ination/ivina-11.json",
				is = "https://static.web.sdo.com/jijiamobile/pic/ff14/20241113ination/ivina-12.json",
				as = "https://static.web.sdo.com/jijiamobile/pic/ff14/20241113ination/ivina-13.json",
				cs = "https://static.web.sdo.com/jijiamobile/pic/ff14/20241113ination/ivina-14.json",
				rs = "https://static.web.sdo.com/jijiamobile/pic/ff14/20241113ination/ivina-15.json",
				ns = "https://static.web.sdo.com/jijiamobile/pic/ff14/20241113ination/ivina-16.json",
				os = "https://static.web.sdo.com/jijiamobile/pic/ff14/20241113ination/ivina-17.json",
				ls = "https://static.web.sdo.com/jijiamobile/pic/ff14/20241113ination/ivina-18.json",
				ds = "https://static.web.sdo.com/jijiamobile/pic/ff14/20241113ination/ivina-19.json",
				hs = null;
			(function() {
				const s = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;
				window.cancelAnimationFrame || window.mozCancelAnimationFrame
			})();
			var _s = {
					name: "pageIndex",
					components: {
						VueQr: V.a,
						Swiper: c["Swiper"],
						SwiperSlide: c["SwiperSlide"]
					},
					directives: {},
					data() {
						return {
							rindex: 0,
							swiperOptions1: {
								speed: 500,
								init: !0,
								loop: !0,
								observer: !0,
								observeParents: !0,
								updateOnWindowResize: !0,
								autoplay: {
									delay: 3e3,
									disableOnInteraction: !1
								},
								pagination: {
									el: ".swiper-pagination1",
									clickable: !0
								},
								navigation: {
									nextEl: ".swp_next",
									prevEl: ".swp_prev"
								},
								autoplayDisableOnInteraction: !1,
								on: {
									init: function() {},
									transitionEnd: function() {
										hs.rindex = this.realIndex
									}
								}
							},
							swpRet1: this.actConfig.swpRet,
							showadsr: !1,
							ansAllCard: [],
							iknow: !1,
							iagree: !1,
							showrule: !1,
							weburl: this.actConfig.weburl,
							opentime: this.actConfig.opentime,
							btntype: "",
							issec9Back: !1,
							isstarTask: !1,
							isstarList: !1,
							starListArr: [],
							starListAll: [],
							task1: {
								task_name: "关注幻想Bot谢谢喵",
								day_date: "",
								astrology_num: 0,
								finish_num: 0,
								status: !1
							},
							task2: {
								task_name: "了解《最终幻想14》",
								day_date: "",
								astrology_num: 0,
								finish_num: 0,
								status: !1
							},
							task3: {
								task_name: "关注Cindy-Master谢谢喵",
								day_date: "",
								astrology_num: 0,
								finish_num: 0,
								status: !1
							},
							task4: {
								task_name: "打一辈子《最终幻想14》",
								day_date: "",
								astrology_num: 0,
								finish_num: 0,
								status: !1
							},
							hasfinashNum: 0,
							myinfos: null,
							haslogin: !1,
							showlogin: !1,
							loginLoading: !1,
							inpPhone: "",
							inpCode: "",
							codeName: "发送验证码",
							get_code: 60,
							codeis: !0,
							ismaskShare: !1,
							shareLinkWeb: "https://actff1.web.sdo.com/project/20241216secret/index.html",
							shareMeRetId: null,
							shareSelect: Object.assign({}, Object(B["a"])(J)),
							shareSelect1: Object.assign({}, Object(B["a"])(J)),
							shareSelect3: Object.assign({}, Object(B["a"])(J)),
							shareewmlink: "https://actff1.web.sdo.com/project/20241216secret/index.html",
							shareimgUrl: "",
							showShareBox: !1,
							issharecreat: !0,
							islookanswer: !1,
							iscananswer: !1,
							retcard1: Object.assign({}, Object(B["a"])(W)),
							retcard2: Object.assign({}, Object(B["a"])(W)),
							retcard3: Object.assign({}, Object(B["a"])(W)),
							showcard1: !1,
							showcard2: !1,
							showcard3: !1,
							surName: "",
							ckloadingsurName: !1,
							surTime: "",
							surContent: "",
							ckloadingsurContent: !1,
							surMySelect: {
								cname: "",
								timeType: "",
								sizeType: "",
								mycself: {
									min: "",
									cpic: ""
								},
								mycread: {
									ans: "",
									more: "",
									size: "",
									timeType: ""
								}
							},
							question: this.actConfig.question,
							cardRet: this.actConfig.cardRet,
							iscancard: !1,
							hascard: [],
							iscard0: !1,
							iscard1: !1,
							iscard2: !1,
							iscard3: !1,
							iscard4: !1,
							iscard5: !1,
							canselecttime: !1,
							sec1_n1src: e("fd6e"),
							is2nextOver: !1,
							isAudioplay: !1,
							loadingprogress: 0,
							homeContainer: "",
							secenSprite: "",
							homeEndSprite: "",
							homeOpenSprite: "",
							homeLoopSprite: "",
							moveLoopSprite: "",
							appl: null,
							Wid: 960,
							Hit: 1334
						}
					},
					created() {
						hs = this, this.isLoginFun()
					},
					watch: {},
					computed: {
						ismob() {
							var s = "android|blackberry|googlebot-mobile|iemobile|ipad|iphone|ipod|opera mobile|palmos|webos|laptop",
								t = new RegExp(s, "ig"),
								e = navigator.userAgent;
							return !!t.test(e)
						},
						channelFrom() {
							const {
								query: s
							} = this.$route;
							return s.channel || "mirsdo"
						},
						sharecode() {
							const {
								query: s
							} = this.$route;
							return s.sharecode
						}
					},
					mounted() {
						this.$nextTick(() => {
							this.audioInit(), this.intmovFun(), this.queryFun()
						})
					},
					methods: {
						async clickCountFun(s) {
							let t = {
								type: s
							};
							try {
								await m(t)
							} catch (e) {}
						},
						async starListFun() {
							if (this.haslogin) {
							  this.isstarList = true;
							  try {
								// 从本地缓存中获取历史数据
								let cacheData = JSON.parse(localStorage.getItem('astrology_cache')) || { entries: [] };
								
								if (cacheData.entries.length > 0) {
								  // 使用本地缓存数据替代 API 请求
								  const result = cacheData.entries.map(entry => ({
									user_id: entry.user_id || null,
									target_name: entry.target_name || null,
									content: entry.content || null,
									result: entry.result || null,
									str1: entry.str1 || null,
									str2: entry.str2 || null,
									created_at: entry.created_at || null,
									day_date: entry.day_date || null,
								  }));
						  
								  // 模拟API响应格式
								  const mockResponse = {
									code: 10000,
									msg: "操作成功",
									data: result
								  };
						  
								  this.starListArr = mockResponse.data.slice(0, 5);  // 获取前5条数据
								  this.starListAll = mockResponse.data;
								} else {
								  this.$message.warning("活动太火爆，请稍后～");
								}
							  } catch (error) {
								this.$message.warning("活动太火爆，请稍后～");
							  }
							} else {
							  this.loginChoose();
							}
						  },
						  
						  async eachCardRes() {
							if (this.haslogin) {
							  try {
								// 从本地缓存中获取历史数据
								let cacheData = JSON.parse(localStorage.getItem('astrology_cache')) || { entries: [] };
								
								if (cacheData.entries.length > 0) {
								  const result = cacheData.entries.map(entry => ({
									user_id: entry.user_id || null,
									target_name: entry.target_name || null,
									content: entry.content || null,
									result: entry.result || null,
									str1: entry.str1 || null,
									str2: entry.str2 || null,
									created_at: entry.created_at || null,
									day_date: entry.day_date || null,
								  }));
						  
								  let s = result.map(e => JSON.parse(e.str1));
								  let t = this.cardRet.map(s => (s.cself = s.cself.map(t => {
									if (t.size === "f") t.subtit = "正位";
									if (t.size === "r") t.subtit = "逆位";
									t.uid = `${s.cid}${t.size}`;
									t.uname = `${s.cname}`;
									t.ishas = false;
									return t;
								  }), s.cself));
						  
								  this.ansAllCard = this._.flatten(t);
								  
								  let i = s.map(s => (s.one.uid = `${s.one.cid}${s.one.sizeType}`, s.one));
								  const a = _.map(i, "uid");
								  
								  this._.each(this.ansAllCard, s => {
									if (this._.includes(a, s.uid)) {
									  s.ishas = true;
									}
								  });
								  
								  this.ansAllCard;
								} else {
								  this.$message.warning("活动太火爆，请稍后～");
								}
							  } catch (error) {
								this.$message.warning("活动太火爆，请稍后～");
							  }
							} else {
							  let s = this.cardRet.map(s => (s.cself = s.cself.map(t => {
								if (t.size === "f") t.subtit = "正位";
								if (t.size === "r") t.subtit = "逆位";
								t.uid = `${s.cid}${t.size}`;
								t.uname = `${s.cname}`;
								t.ishas = false;
								return t;
							  }), s.cself));
							  this.ansAllCard = this._.flatten(s);
							}
							this.lookMyAnswerFun();
						  },						  
						lookMyAnswerFun() {
							this.$refs.lookAnswerList.style.display = "block"
						},
						backCard() {
							this.$refs.lookAnswerList.style.display = "none"
						},
						lookMeHist(s) {
							if (this.isstarList = !1, s.str1) {
								let t = JSON.parse(s.str1);
								this.shareSelect1 = t.two, this.shareSelect3 = t.three, this.shareSelect = t.one, this.$nextTick(() => {
									this.creatShareFun("me")
								})
							}
						},
						async queryFun() {
							this.isWeiXin() && A({
								APIs: ["updateTimelineShareData", "updateAppMessageShareData", "onMenuShareTimeline", "onMenuShareAppMessage"],
								callback: {
									title: "天星的奥秘 -《最终幻想14》占星小游戏",
									imgUrl: "https://static.web.sdo.com/jijiamobile/pic/ff14/20241113ination/shareicons0210.jpg",
									description: "快来测一测，获得你的启示！十二神将给予你指引！",
									url: "https://actff1.web.sdo.com/project/20241216secret/index.html",
									successMethod: ""
								}
							});
							let s = this.$route;
							if ("{}" == JSON.stringify(s.query));
							else try {
								let t = {
										id: s.query.sid
									},
									{
										data: e
									} = await v(t);
								if (e.str1) {
									let s = JSON.parse(e.str1);
									this.shareSelect1 = s.two, this.shareSelect3 = s.three, this.shareSelect = s.one, this.$nextTick(() => {
										this.creatShareFun()
									})
								}
								otherShare
							} catch (t) {}
						},
						shareMyPic() {
							let s = this,
								t = "https://actff1.web.sdo.com/project/20241216secret/index.html#/index?sid=" + this.shareMeRetId,
								e = "天星摇动，快来获得你的启示！FF14占星为你开启！天星的奥秘：" + t;
							this.$copyText(e).then((function(t) {
								s.$message({
									message: "分享链接复制成功",
									type: "success"
								})
							}), (function(s) {}))
						},
						
						starTaskFun() {
							this.haslogin ? this.isstarTask = !0 : this.loginChoose()
						},
						async logOut() {
							try {
								await y(), window.location.reload()
							} catch (s) {
								this.$message.warning("请稍后～")
							}
						},
						async shareGetFF14() {
							if (this.showadsr = !0, this.haslogin) try {
								const {
									code: s,
									msg: t,
									data: e
								} = await C();
								if (1e4 == s) {
									let s = Number(this.myinfos.astrologyLastNum) + Number(1);
									this.$set(this.myinfos, "astrologyLastNum", s), this.$set(this.task4, "status", !0), this.$set(this.task4, "finish_num", 2)
								}
							} catch (s) {}
						},
						async sharePage2Friend() {
							if (this.isWeiXin() ? this.ismaskShare = !0 : this.doLinkCopy(), this.haslogin) try {
								const {
									code: s,
									msg: t,
									data: e
								} = await g();
								if (1e4 == s) {
									let s = Number(this.myinfos.astrologyLastNum) + Number(1);
									this.$set(this.myinfos, "astrologyLastNum", s), this.isLoginFun()
								}
							} catch (s) {}
						},
						doLinkCopy() {
							let s = this,
								t = "天星摇动，快来获得你的启示！FF14占星为你开启！天星的奥秘：" + this.shareLinkWeb;
							this.$copyText(t).then((function(t) {
								s.$message({
									message: "分享链接复制成功",
									type: "success"
								})
							}), (function(s) {}))
						},
						isWeiXin() {
							var s = navigator.userAgent.toLowerCase();
							return -1 != s.indexOf("micromessenger")
						},
						loginChoose() {
							this.isWeiXin() ? window.location.replace("https://ff14act.web.sdo.com/api/common/wx/authUserInfoBySQ?return_url=https://actff1.web.sdo.com/project/20241216secret/index.html") : this.showlogin = !0
						},
						focusFun() {},
						closeShowlogin() {
							this.loginLoading || (this.showlogin = !1)
						},
						async phoneUpLoginFun() {
							let s = /^1\d{10}$/;
							if (this.inpPhone)
								if (this.inpPhone.length < 11) this.$message.warning("请检查手机号码！");
								else if (s.test(this.inpPhone))
								if (this.inpCode) {
									this.loginLoading = !0;
									try {
										let {
											code: s,
											data: t,
											msg: e
										} = await u(this.inpPhone, this.inpCode);
										this.loginLoading = !1, 1e4 == s ? (this.showlogin = !1, this.isLoginFun()) : this.$message.error("" + e)
									} catch (t) {
										this.loginLoading = !1, this.$message.warning("活动太火爆，请稍后～")
									}
								} else this.$message.warning("请输入验证码！");
							else this.$message.warning("请检查手机号码！");
							else this.$message.warning("请输入手机号码！")
						},
						async sendCode() {
							if (!this.codeis) return;
							this.codeis = !1;
							let s = /^1\d{10}$/;
							if (!this.inpPhone) return void this.$message.warning("请输入手机号码！");
							if (this.inpPhone.length < 11) return void this.$message.warning("请检查手机号码！");
							if (!s.test(this.inpPhone)) return void this.$message.warning("请检查手机号码！");
							let t = {
								phone: this.inpPhone
							};
							try {
								let {
									code: s,
									msg: e
								} = await p(t);
								1e4 == s ? this.settime() : this.$message.error("" + e)
							} catch (e) {
								this.$message.warning("活动太火爆，请稍后～")
							}
						},
						settime() {
							let s = this;
							if (!(this.get_code > 0)) return this.get_code = 60, this.codeName = "发送验证码", this.codeis = !0, !1;
							this.get_code = this.get_code - 1, this.codeName = this.get_code + "秒", this.codeis = !1, setTimeout((function() {
								s.settime()
							}), 1e3)
						},
                        async isLoginFun() {
                            try {
                                // 保证用户被视为已登录
                                this.haslogin = !0;
                        
                                // 使用模拟的用户数据（来自你提供的数据）
                                const simulatedData = {
                                    myinfos: {
                                        nickname: "",
                                        phone: "丝瓜卡夫卡",
                                        astrologyLastNum: 5201314,  // 剩余占星次数
                                        astrologyFreeLastNum: "999999",  // 免费占星次数
                                        dayTaskFinishNum: 4,  // 今天已完成的任务数
                                        taskInfo: [
                                            {
                                                task_name: "了解《最终幻想14》",
                                                day_date: "2025-02-13",
                                                astrology_num: 1,
                                                finish_num: 1,
                                                status: true
                                            },
                                            {
                                                task_name: "关注Cindy-Master谢谢喵",
                                                day_date: "2025-02-13",
                                                astrology_num: 1,
                                                finish_num: 1,
                                                status: true
                                            },
                                            {
                                                task_name: "打一辈子《最终幻想14》",
                                                day_date: "2025-02-13",
                                                astrology_num: 1,
                                                finish_num: 1,
                                                status: true
                                            },
                                            {
                                                task_name: "关注幻想Bot谢谢喵",
                                                day_date: "2025-02-13",
                                                astrology_num: 1,
                                                finish_num: 1,
                                                status: true
                                            }
                                        ]
                                    }
                                };
                        
                                // 使用模拟数据来设置 myinfos 和 taskInfo
                                this.myinfos = simulatedData.myinfos;
                        
                                // 提取任务数据并赋值
                                const s = simulatedData.myinfos.taskInfo.filter(task => task.task_name === "关注Cindy-Master谢谢喵");
                                const t = simulatedData.myinfos.taskInfo.filter(task => task.task_name === "打一辈子《最终幻想14》");
                                const i = simulatedData.myinfos.taskInfo.filter(task => task.task_name === "关注幻想Bot谢谢喵");
                                const a = simulatedData.myinfos.taskInfo.filter(task => task.task_name === "了解《最终幻想14》");
                        
                                this.task1 = s[0];
                                this.task2 = t[0];
                                this.task3 = i[0];
                                this.task4 = a[0];
                        
                                // 计算已完成任务数量（可以根据模拟数据来计算）
                                this.hasfinashNum = this._.sumBy(simulatedData.myinfos.taskInfo, task => task.status ? task.astrology_num : 0);
                        
                            } catch (error) {
                                console.error("登录检查出错:", error);
                            }
                        },                                             
						secRefsh() {
							window.location.reload()
						},
						LoginFn() {},
						LoginOut() {},
						closeShare() {},
						startFun() {
							this.haslogin ? this.myinfos.astrologyLastNum <= 0 ? this.$message.warning("您剩余次数不足，可完成相关任务获得！") : this.iagree = !0 : this.loginChoose()
						},
						iagreeFun() {
							this.iknow ? (this.iagree = !1, S()(".sec2").fadeIn(), S()(".intmov").fadeOut(), this.sec2MoveFun(), setTimeout(() => {
								this.homeLoopSprite.visible = !1, this.homeLoopSprite.destroy()
							}, 1500)) : this.$message.warning("请点击同意以上占星须知！")
						},
						sec2MoveFun() {
							this.Velocity(this.$refs.sec2_pop, {
								opacity: [1, "linear"]
							}, {
								easing: "linear",
								duration: 500,
								delay: 400
							}), this.Velocity(this.$refs.sec2_p1, {
								translateY: ["20px", "linear"],
								opacity: [1, "linear"]
							}, {
								easing: "linear",
								duration: 700,
								delay: 600
							}), this.Velocity(this.$refs.sec2_p2, {
								translateY: ["20px", "linear"],
								opacity: [1, "linear"]
							}, {
								easing: "linear",
								duration: 700,
								delay: 1500
							}), this.Velocity(this.$refs.sec2_p3, {
								translateY: ["20px", "linear"],
								opacity: [1, "linear"]
							}, {
								easing: "linear",
								duration: 700,
								delay: 2500
							}), this.Velocity(this.$refs.sec2_p4, {
								translateY: ["20px", "linear"],
								opacity: [1, "linear"]
							}, {
								easing: "linear",
								duration: 700,
								delay: 3400
							}), this.Velocity(this.$refs.sec2_txt_bg, {
								translateY: ["-0.8rem", "linear"],
								opacity: [1, "linear"]
							}, {
								easing: "linear",
								duration: 300,
								delay: 3900,
								complete: () => {
									this.is2nextOver = !0
								}
							}), this.Velocity(this.$refs.sec2_next_box, {
								opacity: [1, "linear"]
							}, {
								easing: "linear",
								duration: 300,
								delay: 3900
							})
						},
						nextFun() {
							this.is2nextOver && (this.Velocity(this.$refs.sec2_text_line, "fadeOut", {
								duration: 1e3,
								complete: () => {
									this.$refs.sec2_text_line.style.display = "none"
								}
							}), this.Velocity(this.$refs.sec2_pop, "fadeOut", {
								duration: 1e3,
								complete: () => {
									this.$refs.sec2_pop.style.display = "none"
								}
							}), this.Velocity(this.$refs.sec2_txt_bg, "fadeOut", {
								duration: 1e3,
								complete: () => {
									this.$refs.sec2_txt_bg.style.display = "none"
								}
							}), this.Velocity(this.$refs.sec2_next_box, "fadeOut", {
								duration: 800,
								complete: () => {
									this.$refs.sec2_next_box.style.display = "none", this.Velocity(this.$refs.roade, {
										width: ["10rem", "easeOutSine"],
										height: ["10rem", "easeOutSine"],
										marginLeft: ["-5rem", "easeOutSine"],
										top: ["3.56rem", "easeOutSine"]
									}, {
										easing: "easeOutSine",
										duration: 800,
										delay: 0
									}), this.Velocity(this.$refs.sec3_cards, {
										opacity: .5,
										rotate: "0deg",
										translateY: "1.4rem"
									}, {
										easing: "swing",
										duration: 600,
										delay: 300
									}), this.$refs.sec3_tit_box.style.display = "block", this.Velocity(this.$refs.sec3_tit_box, {
										opacity: 1
									}, {
										easing: "swing",
										duration: 1200,
										delay: 500,
										complete: () => {}
									})
								}
							}))
						},
						async nkNameFun() {
                            if (!this.ckloadingsurName) {
                                if (this.surName) {
                                    this.ckloadingsurName = !0;
                        
                                    // 模拟成功响应，跳过API请求
                                    // 直接模拟成功响应，继续执行后续操作
                                    this.Velocity(this.$refs.sec3_tit_box, {
                                        opacity: 0
                                    }, {
                                        easing: "linear",
                                        duration: 1000,
                                        delay: 0,
                                        complete: () => {
                                            this.ckloadingsurName = !1;
                                            this.$refs.sec3_tit_box.style.display = "none";
                                            this.chooseTimePage();  // 跳到下一步
                                        }
                                    });
                                } else {
                                    this.$message.warning("请输入姓名或昵称！");
                                }
                            }
                        },
						chooseTimePage() {
							this.$refs.sec4_box_star.style.display = "block", this.Velocity(this.$refs.sec4_star_bg, {
								opacity: 1
							}, {
								easing: "linear",
								duration: 400,
								delay: 0
							}), this.Velocity(this.$refs.sec4_btn_top, {
								opacity: 1
							}, {
								easing: "linear",
								duration: 400,
								delay: 0,
								complete: () => {
									this.Velocity(this.$refs.sec4_btn_top, {
										translateY: ["-2.48rem", "linear"]
									}, {
										easing: "linear",
										duration: 700,
										delay: 0,
										complete: () => {
											this.Velocity(this.$refs.sec4_w, {
												opacity: 1
											}, {
												easing: "linear",
												duration: 300,
												delay: 0
											})
										}
									})
								}
							}), this.Velocity(this.$refs.sec4_btn_left, {
								opacity: 1
							}, {
								easing: "linear",
								duration: 400,
								delay: 0,
								complete: () => {
									this.Velocity(this.$refs.sec4_btn_left, {
										translateY: ["1.8rem", "linear"],
										translateX: ["-2.2rem", "linear"]
									}, {
										easing: "linear",
										duration: 700,
										delay: 0,
										complete: () => {
											this.Velocity(this.$refs.sec4_n, {
												opacity: 1
											}, {
												easing: "linear",
												duration: 300,
												delay: 0
											})
										}
									})
								}
							}), this.Velocity(this.$refs.sec4_btn_right, {
								opacity: 1
							}, {
								easing: "linear",
								duration: 400,
								delay: 0,
								complete: () => {
									this.Velocity(this.$refs.sec4_btn_right, {
										translateY: ["1.8rem", "linear"],
										translateX: ["2.2rem", "linear"]
									}, {
										easing: "linear",
										duration: 700,
										delay: 0,
										complete: () => {
											this.Velocity(this.$refs.sec4_b, {
												opacity: 1
											}, {
												easing: "linear",
												duration: 300,
												delay: 0
											})
										}
									})
								}
							}), this.Velocity(this.$refs.sec4_choose, {
								opacity: 1
							}, {
								easing: "linear",
								duration: 300,
								delay: 1e3
							}), this.Velocity(this.$refs.sec4_title, {
								opacity: 1
							}, {
								easing: "linear",
								duration: 300,
								delay: 1e3,
								complete: () => {
									this.canselecttime = !0
								}
							})
						},
						selectTimeFun(s) {
							this.surTime || this.canselecttime && (this.surTime = s, S()(".sec4_choose").fadeOut(), setTimeout(() => {
								this.page3StartFun()
							}, 500))
						},
						page3StartFun() {
							S()(".sec_page3").fadeIn(), S()(".sec2").fadeOut()
						},
						questionFun() {
							this.surContent = "···", setTimeout(() => {
								let s = this._.sample(this.question);
								this.surContent = s.q
							}, 300), this.Velocity(this.$refs.sec5_sz, {
								translateY: ["-0.3rem", "linear"]
							}, {
								duration: 100,
								complete: () => {
									this.Velocity(this.$refs.sec5_sz, {
										translateY: ["0rem", "linear"]
									}, {
										duration: 100
									})
								}
							})
						},
						async startInation() {
                            if (!this.ckloadingsurContent && "···" != this.surContent) {
                                if ("" != this.surContent) {
                                    this.ckloadingsurContent = !0;
                                    this.cardBeginFun();  
                                } else {
                                    this.$message.warning("请输入占星的内容！");
                                }
                            }
                        },
						cardBeginFun() {
							S()(".sec_page3").fadeOut(), S()(".card_page").fadeIn(), this.cardopenMove()
						},
						cardopenMove() {
							this.Velocity(this.$refs.card_pop, {
								opacity: [1, "linear"]
							}, {
								easing: "linear",
								duration: 500,
								delay: 400
							}), this.Velocity(this.$refs.card_txt, {
								translateY: ["-0.8rem", "linear"],
								opacity: [1, "linear"]
							}, {
								easing: "linear",
								duration: 300,
								delay: 600,
								complete: () => {}
							}), this.Velocity(this.$refs.cards_boxs, {
								opacity: [1, "linear"]
							}, {
								easing: "linear",
								duration: 600,
								delay: 1e3,
								complete: () => {
									this.cardSanFun()
								}
							})
						},
						cardSanFun() {
							this.Velocity(this.$refs.card0, {
								translateX: "-3.6rem",
								translateY: "-0.5rem",
								rotate: "-25deg"
							}, {
								easing: "easeInOutSine",
								duration: 500,
								delay: 0
							}), this.Velocity(this.$refs.card1, {
								translateX: "-2.2rem",
								translateY: "0.07rem",
								rotate: "-13deg"
							}, {
								easing: "easeInOutSine",
								duration: 500,
								delay: 0
							}), this.Velocity(this.$refs.card4, {
								translateX: "2.2rem",
								translateY: "0.07rem",
								rotate: "13deg"
							}, {
								easing: "easeInOutSine",
								duration: 500,
								delay: 0
							}), this.Velocity(this.$refs.card5, {
								translateX: "3.6rem",
								translateY: "-0.5rem",
								rotate: "25deg"
							}, {
								easing: "easeInOutSine",
								duration: 500,
								delay: 0
							}), this.Velocity(this.$refs.card2, {
								translateX: "-0.7rem",
								translateY: "0.25rem",
								rotate: "-3deg"
							}, {
								easing: "easeInOutSine",
								duration: 500,
								delay: 0
							}), this.Velocity(this.$refs.card3, {
								translateX: "0.7rem",
								translateY: "0.25rem",
								rotate: "3deg"
							}, {
								easing: "easeInOutSine",
								duration: 500,
								delay: 0,
								complete: () => {
									this.Velocity(this.$refs.cards_tit, {
										translateY: ["6px", "linear"],
										opacity: [1, "linear"]
									}, {
										easing: "linear",
										duration: 500,
										delay: 0,
										complete: () => {
											this.iscancard = !0
										}
									})
								}
							})
						},
						chooseCard(s) {
							this.iscancard && (this.hascard.length >= 3 || this.hascard.indexOf(s) > -1 || (this.hascard = this._.concat(this.hascard, s), 0 == s && (this.iscard0 = !0), 1 == s && (this.iscard1 = !0), 2 == s && (this.iscard2 = !0), 3 == s && (this.iscard3 = !0), 4 == s && (this.iscard4 = !0), 5 == s && (this.iscard5 = !0), 3 == this.hascard.length && this.openCardsFun()))
						},
						openCardsFun() {
							this.Velocity(this.$refs.card_pop, {
								opacity: [0, "linear"]
							}, {
								easing: "linear",
								duration: 500,
								delay: 400,
								complete: () => {
									this.$refs.card_pop.style.display = "none"
								}
							}), this.Velocity(this.$refs.card_txt, {
								opacity: [0, "linear"]
							}, {
								easing: "linear",
								duration: 500,
								delay: 400,
								complete: () => {
									this.$refs.card_txt.style.display = "none"
								}
							}), this.Velocity(this.$refs.cards_tit, {
								opacity: [0, "linear"]
							}, {
								easing: "linear",
								duration: 500,
								delay: 400,
								complete: () => {
									this.$refs.cards_tit.style.display = "none"
								}
							}), this.Velocity(this.$refs.cards_boxs, {
								opacity: [0, "linear"]
							}, {
								easing: "linear",
								duration: 500,
								delay: 400,
								complete: () => {
									this.$refs.cards_boxs.style.display = "none", this.Velocity(this.$refs.card_roade, {
										width: ["10rem", "easeOutSine"],
										height: ["10rem", "easeOutSine"],
										marginLeft: ["-5rem", "easeOutSine"],
										top: ["3.56rem", "easeOutSine"]
									}, {
										easing: "easeOutSine",
										duration: 500,
										delay: 0,
										complete: () => {
											this.openAnswerFun()
										}
									})
								}
							})
						},
						openAnswerFun() {
							this.retcard1 = "", this.retcard2 = "", this.retcard3 = "";
							let s = this._.sampleSize(this.cardRet, 3);
							this.retcard1 = this.doCardRetFun("b", s[0]), this.retcard2 = this.doCardRetFun("n", s[1]), this.retcard3 = this.doCardRetFun("w", s[2]), this.retcard1, this.retcard2, this.retcard3, this.$refs.openAnswerBoxs.style.display = "block", this.Velocity(this.$refs.openAnswer_title, {
								opacity: [1, "linear"]
							}, {
								easing: "linear",
								duration: 300,
								delay: 0,
								complete: () => {}
							}), this.Velocity(this.$refs.openAnswer_line, {
								opacity: [1, "linear"]
							}, {
								easing: "linear",
								duration: 400,
								delay: 0,
								complete: () => {}
							}), this.Velocity(this.$refs.card_line2, {
								marginTop: ["0rem", "linear"],
								opacity: [1, "linear"]
							}, {
								easing: "linear",
								duration: 400,
								delay: 0
							}), this.Velocity(this.$refs.card_line1, {
								marginTop: ["0rem", "linear"],
								opacity: [1, "linear"]
							}, {
								easing: "linear",
								duration: 400,
								delay: 150
							}), this.Velocity(this.$refs.card_line3, {
								marginTop: ["-0.5rem", "linear"],
								opacity: [1, "linear"]
							}, {
								easing: "linear",
								duration: 400,
								delay: 250,
								complete: () => {
									this.$refs.sec8_top_arrbox2.style.display = "block"
								}
							})
						},
						doCardRetFun(s, t) {
							let e = ["f", "r"],
								i = this._.sampleSize(e, 1);
							i[0];
							let a = t.cread.filter(t => t.timeType == s[0] && t.size == i[0]);
							t.mycread = this._.head(a);
							let c = t.cself.filter(s => s.size == i[0]);
							t.mycself = this._.head(c), t.timeType = s, t.sizeType = i[0], t.surName = this.surName, t.surContent = this.surContent, t.dayTime = z()().format("YYYY年M月D日");
							let r = this._.sample(t.mycread.refs);
							return t.mycread.ans = r.ans, t.mycread.more = r.more, t
						},
						showCardFun(s) {
							if (this.showcard1 && this.showcard2 && this.showcard3) return 1 == s && (S()(".sec8_txt41").fadeIn(), S()(".sec8_txt42").fadeOut(), S()(".sec8_txt43").fadeOut()), 2 == s && (S()(".sec8_txt41").fadeOut(), S()(".sec8_txt42").fadeIn(), S()(".sec8_txt43").fadeOut()), void(3 == s && (S()(".sec8_txt41").fadeOut(), S()(".sec8_txt42").fadeOut(), S()(".sec8_txt43").fadeIn()));
							if (1 == s) {
								if (!this.showcard2) return void this.$message.warning("请按照箭头提示翻牌！");
								if (this.showcard1) return;
								if (this.showcard3) return;
								this.showcard1 = !0, this.$refs.sec8_txtbox1.style.display = "block", this.Velocity(this.$refs.sec8_txtbox1, {
									opacity: [1, "linear"]
								}, {
									easing: "linear",
									duration: 400,
									delay: 100,
									complete: () => {}
								}), this.$refs.sec8_top_arrbox1.style.display = "none", this.$refs.sec8_top_arrbox3.style.display = "block", S()(".sec8_txt41").fadeIn(), S()(".sec8_txt42").fadeOut(), S()(".sec8_txt43").fadeOut()
							}
							if (2 == s) {
								if (this.showcard1) return;
								if (this.showcard3) return;
								if (this.showcard2) return;
								this.showcard2 = !0, this.$refs.sec8_txtbox2.style.display = "block", this.Velocity(this.$refs.sec8_txtbox2, {
									opacity: [1, "linear"]
								}, {
									easing: "linear",
									duration: 400,
									delay: 100,
									complete: () => {}
								}), this.$refs.sec8_top_arrbox2.style.display = "none", this.$refs.sec8_top_arrbox1.style.display = "block", S()(".sec8_txt42").fadeIn(), S()(".sec8_txt41").fadeOut(), S()(".sec8_txt43").fadeOut()
							}
							if (3 == s) {
								if (!this.showcard1) return void this.$message.warning("请按照箭头提示翻牌！");
								if (!this.showcard2) return void this.$message.warning("请按照箭头提示翻牌！");
								if (this.showcard3) return;
								this.showcard3 = !0, this.$refs.sec8_txtbox3.style.display = "block", this.Velocity(this.$refs.sec8_txtbox3, {
									opacity: [1, "linear"]
								}, {
									easing: "linear",
									duration: 400,
									delay: 100,
									complete: () => {}
								}), this.$refs.sec8_top_arrbox1.style.display = "none", this.$refs.sec8_top_arrbox2.style.display = "none", this.$refs.sec8_top_arrbox3.style.display = "none", S()(".sec8_txt43").fadeIn(), S()(".sec8_txt41").fadeOut(), S()(".sec8_txt42").fadeOut(), this.Velocity(this.$refs.sec8_btn, {
									translateY: ["-0.5rem", "linear"],
									opacity: [1, "linear"]
								}, {
									easing: "linear",
									duration: 400,
									delay: 200,
									complete: () => {
										this.iscananswer = !0
									}
								}), this.Velocity(this.$refs.sec8_look, {
									translateX: ["-2.8rem", "linear"],
									opacity: [1, "linear"]
								}, {
									easing: "linear",
									duration: 300,
									delay: 200,
									complete: () => {
										this.islookanswer = !0
									}
								})
							}
						},
						async openMyAnswerFun() {
							if (!this.iscananswer) return;
						
							// Set the selected options based on the time
							if (this.surTime === "b") {
								this.surMySelect = this.retcard1;
								this.shareSelect = this.retcard1;
								this.shareSelect1 = this.retcard2;
								this.shareSelect3 = this.retcard3;
							} else if (this.surTime === "n") {
								this.surMySelect = this.retcard2;
								this.shareSelect = this.retcard2;
								this.shareSelect1 = this.retcard1;
								this.shareSelect3 = this.retcard3;
							} else if (this.surTime === "w") {
								this.surMySelect = this.retcard3;
								this.shareSelect = this.retcard3;
								this.shareSelect1 = this.retcard1;
								this.shareSelect3 = this.retcard2;
							}
						
							if (this.surMySelect && this.issec9Back) {
								S()(".card_page").fadeOut();
								S()(".last_page").fadeIn();
								return;
							}
						
							// Prepare data for POST request
							let s = JSON.parse(JSON.stringify(this.shareSelect)),
								t = JSON.parse(JSON.stringify(this.shareSelect1)),
								e = JSON.parse(JSON.stringify(this.shareSelect3)),
								i = {
									one: this._.omit(s, ["cread", "cself"]),
									two: this._.omit(t, ["cread", "cself"]),
									three: this._.omit(e, ["cread", "cself"])
								};
						
							let a = JSON.stringify(i);
							this.encrypt(a);
							let c = this.encrypt(a);
						
							// Create the current timestamp and date
							const createdAt = new Date().toISOString().split('T')[0] + " " + new Date().toLocaleTimeString("en-GB", { hour12: false }).slice(0, 8);
							const dayDate = new Date().toISOString().split('T')[0];
						
							// Save to browser cache with auto-increment logic
							let cacheData = JSON.parse(localStorage.getItem('astrology_cache')) || { counter: 0, entries: [] };
						
							cacheData.counter += 1;
							cacheData.entries.push({
								target_name: this.surName,
								content: this.surContent,
								result: c,
								str1: a,
								created_at: createdAt,
								day_date: dayDate,
								id: cacheData.counter
							});
						
							// Update the cache in localStorage
							localStorage.setItem('astrology_cache', JSON.stringify(cacheData));
						
							// Simulate successful response directly
							const mockResponse = { code: 10000, msg: "操作成功", data: cacheData.counter };
						
							// You can return the mock response instead of the actual API call
							try {
								this.$set(this.myinfos, "astrologyLastNum", Number(this.myinfos.astrologyLastNum) - 1);
								this.shareMeRetId = mockResponse.data; // Use mock ID
								this.issec9Back = true;
								S()(".card_page").fadeOut();
								S()(".last_page").fadeIn();
							} catch (error) {
								this.$message.warning("活动太火爆，请稍后～");
							}
						},										   
						encrypt(s) {
							return btoa(unescape(encodeURIComponent(s)))
						},
						decrypt(s) {
							return new Promise(async (t, e) => {
								try {
									var i = decodeURIComponent(escape(atob(s)));
									t(i)
								} catch (a) {
									e(a)
								}
							})
						},
						sec9Back() {
							S()(".card_page").fadeIn(), S()(".last_page").fadeOut()
						},
						creatShareFun(s) {
							s ? (this.btntype = "me", this.shareResultFun()) : this.btntype = "other", this.shareSelect, this.showShareBox = !0, this.canvasToHtml()
						},
						async shareResultFun() {
							try {
								await f()
							} catch (s) {}
						},
						canvasToHtml() {
							R()(this.$refs.imgContainer, {
								useCORS: !0,
								allowTaint: !0,
								width: "750",
								height: "1333",
								backgroundColor: null,
								scale: 1
							}).then(s => {
								let t = s.toDataURL("image/jpeg");
								this.shareimgUrl = t, this.issharecreat = !1
							}).catch(s => {})
						},
						intmovFun() {
							this.appl = new P({
								width: this.Wid,
								height: this.Hit,
								antialias: !0,
								resolution: 2,
								transparent: !0
							}), this.appl.stage.interactive = !0, 0 == Y.progress ? Y.add("move0", X).add("move1", U).add("move2", D).add("move3", E).add("move4", H).add("move5", G).add("move6", Q).add("move7", K).add("move8", Z).add("move9", ss).add("move10", ts).add("move11", es).add("move12", is).add("move13", as).add("move14", cs).add("move15", rs).add("move16", ns).add("move17", os).add("move18", ls).add("move19", ds).load(() => {
								this.setupl()
							}) : 100 == Y.progress && this.setupl(), Y.onProgress.add(s => {
								this.loadingprogress = this._.floor(s.progress), this.loadingprogress, s.progress
							}), Y.onComplete.add(s => {}), document.getElementById("intmov_move").appendChild(this.appl.view)
						},
						setupl() {
							this.creatHome()
						},
						creatHome() {
							this.homeContainer = new k["Container"], this.appl.stage.addChild(this.homeContainer);
							let s = [];
							const t = Object.values(q.move0.textures),
								e = Object.values(q.move1.textures),
								i = Object.values(q.move2.textures),
								a = Object.values(q.move3.textures),
								c = Object.values(q.move4.textures),
								r = Object.values(q.move5.textures),
								n = Object.values(q.move6.textures),
								o = Object.values(q.move7.textures),
								l = Object.values(q.move8.textures),
								d = Object.values(q.move9.textures),
								h = Object.values(q.move10.textures),
								_ = Object.values(q.move11.textures),
								p = Object.values(q.move12.textures),
								m = Object.values(q.move13.textures),
								u = Object.values(q.move14.textures),
								v = Object.values(q.move15.textures),
								f = Object.values(q.move16.textures),
								g = Object.values(q.move17.textures),
								C = Object.values(q.move18.textures),
								y = Object.values(q.move19.textures);
							s = [...t, ...e, ...i, ...a, ...c, ...r, ...n, ...o, ...l, ...d, ...h, ..._, ...p, ...m, ...u, ...v, ...f, ...g, ...C, ...y], this.homeLoopSprite = new k["extras"].AnimatedSprite(s), this.homeLoopSprite.animationSpeed = .5, this.homeLoopSprite.width = this.Wid, this.homeLoopSprite.height = this.Hit, this.homeLoopSprite.loop = !0, this.homeLoopSprite.visible = !0, this.homeLoopSprite.interactive = !0, this.homeContainer.addChild(this.homeLoopSprite), S()(".maskImgLoad").fadeOut(), S()(".intmov").fadeIn(), this.homeLoopSprite.play()
						},
						audioInit() {
							let s = this;
							window.WeixinJSBridge ? WeixinJSBridge.invoke("getNetworkType", {}, (function(t) {
								s.isAudioplay = !0, s.$refs.audioAuto.play()
							}), !1) : document.addEventListener("WeixinJSBridgeReady", (function() {
								WeixinJSBridge.invoke("getNetworkType", {}, (function(t) {
									s.isAudioplay = !0, s.$refs.audioAuto.play()
								}))
							}), !1)
						},
						playAudio() {
							this.isAudioplay ? (this.$refs.audioAuto.pause(), this.isAudioplay = !1) : (this.isAudioplay = !0, this.$refs.audioAuto.play())
						},
						playAudios() {
							this.isAudioplay || (this.isAudioplay = !0, this.$refs.audioAuto.play())
						}
					}
				},
				ps = _s,
				ms = (e("896f"), e("2877")),
				us = Object(ms["a"])(ps, i, a, !1, null, null, null);
			t["default"] = us.exports
		},
		3256: function(s, t) {
			s.exports = "https://static.web.sdo.com/jijiamobile/pic/ff14/20241113ination/ff14_4657640b3680c0b2.png"
		},
		"38fc": function(s, t) {
			s.exports = "https://static.web.sdo.com/jijiamobile/pic/ff14/20241113ination/ff14_b637e1f84ce2eaf6.jpg"
		},
		"435a": function(s, t, e) {},
		"57a4": function(s, t) {
			s.exports = "https://static.web.sdo.com/jijiamobile/pic/ff14/20241113ination/ff14_ce22f6fd082cd064.png"
		},
		"735a": function(s, t) {
			s.exports = "https://static.web.sdo.com/jijiamobile/pic/ff14/20241113ination/ff14_bbcc4e0df8f3caf4.jpg"
		},
		"896f": function(s, t, e) {
			"use strict";
			e("435a")
		},
		"8fc2": function(s, t) {
			s.exports = "https://static.web.sdo.com/jijiamobile/pic/ff14/20241113ination/ff14_f245480440d7c9d1.jpg"
		},
		da40: function(s, t) {
			s.exports = "https://static.web.sdo.com/jijiamobile/pic/ff14/20241113ination/ff14_95032ec1fcca6c11.jpg"
		},
		fd6e: function(s, t) {
			s.exports = "https://static.web.sdo.com/jijiamobile/pic/ff14/20241113ination/ff14_6f951ff7387fa35e.png"
		}
	}
]);