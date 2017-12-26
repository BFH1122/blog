var max_page;//页的最大个数，可能后期需要分类；

function add(t)
{
	//传送的参数，应该是查询的起始数据
	//var data=search_context(t);//应该提示是否需要分页的功能
	alert(t);
	var text='<tr><th class="post-title">标题</th><th class="publish-status">发布状态</th><th>评论数</th><th>阅读数</th><th>操作</th><th>操作</th></tr>';
	for(var i=0;i<10;i++)
	{
		text=text+'<tr id="post-row-7748319"><td class="post-title"><a href="http://www.cnblogs.com/fxh1314/p/7748319.html" id="post_title_link_7748319">struts2.0简单教程</a>（2017-10-28 22:13）</td><td>发布</td><td>0</td><td>8</td><td><a href="/EditPosts.aspx?postid=7748319&update=1">编辑</a></td><td><a href="javascript:void(0)" onclick="return deletePost(7748319)">删除</a></td></tr>';
	}
	$('#table').append(text);
	$('#bottom').append("当前的页数："+'<input id="page" name="num" type="text" onkeydown="page_transt(event)" style="border-style:none;width:20px;">'+"  总页数：20"+'<a href="#" onclick="add_page()">        下一页 </a><a href="#" onclick="sub_page()">        上一页</a>');
	$("#page").val(t);

}
//实现页数的增加
//根据输入页数进行跳转
function page_transt(e){
	if(e.keyCode==13)
	{
		var page_tmp=$('#page').val();
		$("#table").empty();
		$("#bottom").empty();
		add(page_tmp);
	}
}
//下一页
function add_page()
{
	var page_tmp=$('#page').val();
	$("#table").empty();
	$("#bottom").empty();
	if(parseInt(page_tmp)==max_page)
		page_tmp=max_page-1;
	add(parseInt(page_tmp)+1);
}
//上一页
function sub_page()
{
	var page_tmp=$('#page').val();
	$("#table").empty();
	$("#bottom").empty();
	if(parseInt(page_tmp)==1)
		page_tmp=2;
	add(parseInt(page_tmp)-1);
}
//跳转首页
function page_top(){

}
//调转尾页
function page_bottom(){

}

//实现分页的功能，不能一起全拿来
function search_context(num)
{
	var url="search_context";
	$.post(url,{"num":num},function(data,status){
		//data中应该包含是否需要分页功能，可以直接返回也的数量（）；
		max_page=data[0].max_page;//赋予页的数量
		return data;
	});
}




//tab切换函数
$(document).ready(function(){
	$("#first-tab").addClass('current_nav');
});

function navigate_tabs(container, tab){
	$(".b").css('display' , 'none');
	$(".c").css('display' , 'none');
	$(".a").css('display' , 'none');
	$(".d").css('display' , 'none');
	$(".e").css('display' , 'none');
	$(".f").css('display' , 'none');

	
	$("#first-tab").removeClass('current_nav');
	$("#second-tab").removeClass('current_nav');
	$("#third-tab").removeClass('current_nav');
	$("#four-tab").removeClass('current_nav');
	$("#five-tab").removeClass('current_nav');
	$("#six-tab").removeClass('current_nav');
	
	$("#"+tab).addClass('current_nav');
	$("."+container).show('slow');
}




