// Compiled by ClojureScript 1.7.170 {:static-fns true, :optimize-constants true}
goog.provide('app.components');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('app.db');
goog.require('app.colors');
goog.require('app.previews');
app.components.active_preview = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(app.previews.preview_javascript);
app.components.toggle_preview = (function app$components$toggle_preview(lang){
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(app.components.active_preview,lang) : cljs.core.reset_BANG_.call(null,app.components.active_preview,lang));
});
app.components.select_component = (function app$components$select_component(compid,title,linklist){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$btn_DASH_group$themedrop,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$id,compid], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button$btn$btn_DASH_default$dropdown_DASH_toggle,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,"button",cljs.core.cst$kw$data_DASH_toggle,"dropdown"], null),[cljs.core.str(title),cljs.core.str("    ")].join(''),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span$caret], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span$sr_DASH_only], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ul$dropdown_DASH_menu,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$aria_DASH_labelledby,compid], null),(function (){var iter__5758__auto__ = (function app$components$select_component_$_iter__11419(s__11420){
return (new cljs.core.LazySeq(null,(function (){
var s__11420__$1 = s__11420;
while(true){
var temp__4425__auto__ = cljs.core.seq(s__11420__$1);
if(temp__4425__auto__){
var s__11420__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(s__11420__$2)){
var c__5756__auto__ = cljs.core.chunk_first(s__11420__$2);
var size__5757__auto__ = cljs.core.count(c__5756__auto__);
var b__11422 = cljs.core.chunk_buffer(size__5757__auto__);
if((function (){var i__11421 = (0);
while(true){
if((i__11421 < size__5757__auto__)){
var vec__11427 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__5756__auto__,i__11421);
var linkhandler = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11427,(0),null);
var linktitle = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11427,(1),null);
cljs.core.chunk_append(b__11422,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$href,"#",cljs.core.cst$kw$on_DASH_click,linkhandler], null),linktitle], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,linkhandler], null)));

var G__11429 = (i__11421 + (1));
i__11421 = G__11429;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__11422),app$components$select_component_$_iter__11419(cljs.core.chunk_rest(s__11420__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__11422),null);
}
} else {
var vec__11428 = cljs.core.first(s__11420__$2);
var linkhandler = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11428,(0),null);
var linktitle = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11428,(1),null);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$href,"#",cljs.core.cst$kw$on_DASH_click,linkhandler], null),linktitle], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,linkhandler], null)),app$components$select_component_$_iter__11419(cljs.core.rest(s__11420__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5758__auto__(linklist);
})()], null)], null);
});
app.components.theme_select = (function app$components$theme_select(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.components.select_component,"themedrop","Theme Samples",new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){
return app.db.switch_theme(app.db.black);
}),"black"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){
return app.db.switch_theme(app.db.white);
}),"white"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){
return app.db.switch_theme(app.db.warm_night);
}),"warm-night"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){
return app.db.switch_theme(app.db.white_sand);
}),"white-sand"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){
return app.db.switch_theme(app.db.munich);
}),"munich"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){
return app.db.switch_theme(app.db.greymatters);
}),"greymatters"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){
return app.db.switch_theme(app.db.reykjavik);
}),"reykjavik"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){
return app.db.switch_theme(app.db.oldlace);
}),"oldlace"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){
return app.db.switch_theme(app.db.soft_charcoal);
}),"soft-charcoal"], null)], null)], null);
});
app.components.language_select = (function app$components$language_select(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.components.select_component,"langdrop","Languages",new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){
return app.components.toggle_preview(app.previews.preview_javascript);
}),"Javascript"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){
return app.components.toggle_preview(app.previews.preview_ruby);
}),"Ruby"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){
return app.components.toggle_preview(app.previews.preview_typescript);
}),"Typescript"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){
return app.components.toggle_preview(app.previews.preview_python);
}),"Python"], null)], null)], null);
});
/**
 * button-component returns the markup for a bootstrap default button
 */
app.components.button_component = (function app$components$button_component(text,handler){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button$btn$btn_DASH_default,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,"button",cljs.core.cst$kw$on_DASH_click,handler], null),text], null);
});
app.components.inc_contrast_component = (function app$components$inc_contrast_component(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button$btn$btn_DASH_default,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_click,(function (){
return app.colors.inc_contrast();
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span$conticons,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$i$fa$fa_DASH_adjust], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$i$fa$fa_DASH_plus], null)], null)], null);
});
app.components.red_contrast_component = (function app$components$red_contrast_component(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button$btn$btn_DASH_default,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,"button",cljs.core.cst$kw$on_DASH_click,(function (){
return app.colors.red_contrast();
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span$conticons,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$i$fa$fa_DASH_adjust], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$i$fa$fa_DASH_minus], null)], null)], null);
});
app.components.adjustbg_component = (function app$components$adjustbg_component(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$adbggroup,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input_SHARP_adbg$adbgcheckbox,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$type,"checkbox",cljs.core.cst$kw$value,(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(app.db.adjustbg) : cljs.core.deref.call(null,app.db.adjustbg)),cljs.core.cst$kw$on_DASH_change,(function (){
return app.db.toggle_adjust();
})], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$label,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$for,"adbg"], null),"Adjust Bg"], null)], null);
});
app.components.random_button_component = (function app$components$random_button_component(text,handler){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button$btn$btn_DASH_default,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,"button",cljs.core.cst$kw$on_DASH_click,handler], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span$randicons,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$i$fa$fa_DASH_random], null),text], null)], null);
});
app.components.random_colors_component = (function app$components$random_colors_component(){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$randbuttons$row,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.components.random_button_component,"Warm",(function (){
return app.colors.set_random_palette(app.colors.warm_palette());
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.components.random_button_component,"Soft",(function (){
return app.colors.set_random_palette(app.colors.soft_palette());
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.components.random_button_component,"Pop",(function (){
return app.colors.set_random_palette(app.colors.pop_palette());
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.components.random_button_component,"Muted",(function (){
return app.colors.set_random_palette(app.colors.muted_palette());
})], null)], null);
});
app.components.custom_color_input_component = (function app$components$custom_color_input_component(value,title){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span$custominputlabel,[cljs.core.str(title)].join(''),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input$custominput,new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$id,[cljs.core.str(cljs.core.name(value)),cljs.core.str("id")].join(''),cljs.core.cst$kw$type,"number",cljs.core.cst$kw$step,"0.1",cljs.core.cst$kw$min,"0",cljs.core.cst$kw$max,"100",cljs.core.cst$kw$default_DASH_value,(function (){var G__11431 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(app.db.custom_palette_db) : cljs.core.deref.call(null,app.db.custom_palette_db));
return (value.cljs$core$IFn$_invoke$arity$1 ? value.cljs$core$IFn$_invoke$arity$1(G__11431) : value.call(null,G__11431));
})().toFixed((2))], null)], null)], null);
});
app.components.custom_colors_component = (function app$components$custom_colors_component(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$randbuttons$row$custombutton,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.components.random_button_component,"Custom",(function (){
var sat_11436 = document.getElementById("saturationid").value;
var light_11437 = document.getElementById("lightnessid").value;
var G__11434_11438 = app.db.custom_palette_db;
var G__11435_11439 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$saturation,parseFloat(sat_11436),cljs.core.cst$kw$lightness,parseFloat(light_11437)], null);
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__11434_11438,G__11435_11439) : cljs.core.reset_BANG_.call(null,G__11434_11438,G__11435_11439));

return app.colors.set_random_palette(app.colors.custom_palette(cljs.core.cst$kw$lightness.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(app.db.custom_palette_db) : cljs.core.deref.call(null,app.db.custom_palette_db))),cljs.core.cst$kw$saturation.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(app.db.custom_palette_db) : cljs.core.deref.call(null,app.db.custom_palette_db)))));
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.components.custom_color_input_component,cljs.core.cst$kw$lightness,"L: "], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.components.custom_color_input_component,cljs.core.cst$kw$saturation,"S: "], null)], null);
});
app.components.color_component = (function app$components$color_component(facename){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$colorcomponent,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$row$themeface,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$label$colortitle$col_DASH_xs_DASH_4,cljs.core.name(facename)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input$col_DASH_xs_DASH_3$colorinput$col_DASH_xs_DASH_offset_DASH_1,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$type,"color",cljs.core.cst$kw$value,(function (){var G__11444 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(app.db.app_db) : cljs.core.deref.call(null,app.db.app_db));
return (facename.cljs$core$IFn$_invoke$arity$1 ? facename.cljs$core$IFn$_invoke$arity$1(G__11444) : facename.call(null,G__11444));
})(),cljs.core.cst$kw$on_DASH_change,(function (p1__11440_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app.db.app_db,cljs.core.assoc,facename,p1__11440_SHARP_.target.value);
})], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input$col_DASH_xs_DASH_3$textinput,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$type,"text",cljs.core.cst$kw$value,(function (){var G__11445 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(app.db.app_db) : cljs.core.deref.call(null,app.db.app_db));
return (facename.cljs$core$IFn$_invoke$arity$1 ? facename.cljs$core$IFn$_invoke$arity$1(G__11445) : facename.call(null,G__11445));
})(),cljs.core.cst$kw$on_DASH_change,(function (p1__11441_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app.db.app_db,cljs.core.assoc,facename,p1__11441_SHARP_.target.value);
})], null)], null)], null)], null);
});
app.components.name_component = (function app$components$name_component(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$themename,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$row,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$label$colortitle$col_DASH_xs_DASH_5,[cljs.core.str("Themename")].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input$col_DASH_xs_DASH_4$textinput$col_DASH_xs_DASH_offset_DASH_1$nameinput,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$type,"text",cljs.core.cst$kw$value,cljs.core.cst$kw$themename.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(app.db.app_db) : cljs.core.deref.call(null,app.db.app_db))),cljs.core.cst$kw$on_DASH_change,(function (p1__11446_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app.db.app_db,cljs.core.assoc,cljs.core.cst$kw$themename,p1__11446_SHARP_.target.value);
})], null)], null)], null)], null);
});
app.components.author_component = (function app$components$author_component(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$themename,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$row,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$label$colortitle$col_DASH_xs_DASH_5,[cljs.core.str("Author")].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input$col_DASH_xs_DASH_4$textinput$col_DASH_xs_DASH_offset_DASH_1$nameinput,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$type,"text",cljs.core.cst$kw$value,cljs.core.cst$kw$themeauthor.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(app.db.app_db) : cljs.core.deref.call(null,app.db.app_db))),cljs.core.cst$kw$on_DASH_change,(function (p1__11447_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app.db.app_db,cljs.core.assoc,cljs.core.cst$kw$themeauthor,p1__11447_SHARP_.target.value);
})], null)], null)], null)], null);
});
