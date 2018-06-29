
/*评分hover、点击效果:
1.hover 同步显示当前选定分数
2.点击后 在父元素data-grade 中存储 分数值*/

const evaluate = {
    el:{
    },
    face:{
        defaul:'iconfont icon-pingjia-moren',
        weixiao:'iconfont icon-pingjia-moren-mian active',
        ordinary:'iconfont icon-pingjia-moren-mian1 active'
    },
    getIdx:function(e){ /*获取坐标*/
        var who = this;
        var e = e || window.event;
        var target = e.target || e.srcElement;
        var ta = $(target);
        if(!ta.hasClass('iconfont')) return;

        var idx = ta.index() + 1;

        this.forAll(
            {
                el:ta,
                num: idx
            }
        )
        this.followU(ta,idx)

    },
    followData:function(e){/*根据data-grade 绘制样式*/
        var who = this;
        var e = e || window.event;
        var target = e.target || e.srcElement;
        var ta = $(target);

        var dataId = ta.parent().data('grade');

        this.forAll(
            {
                el:ta,
                num:dataId

            }
        );
        this.followU(ta,dataId)
    },
    followU:function(i,idx){ /*更新右侧分数*/
        i.parent().next().find('u').text(idx);
    },
    forAll:function(data){ /*根据参数 绘制所有样式*/
        var who = this;
        data.el.parent().find('i').each(function(idx,item){


            if(idx < data.num){
                who.write(data.num > 2 ?  true : false,item)
            }else{
                who.Default(item)
            }

        })
    },
    write:function(boolean,i){ /*根据参数 绘制单一元素指定样式*/
        var i = $(i);
        var parent = i.parent();
        boolean ? parent.removeClass('bad') : parent.addClass('bad');
        i.removeClass().addClass( boolean ? this.face.weixiao : this.face.ordinary);
    },
    Default:function(i){ /*绘制单一元素默认样式*/
        $(i).removeClass().addClass(this.face.defaul)
    },
    storeData:function(){ /*根据坐标存储data*/
        var who = this;
        var e = e || window.event;
        var target = e.target || e.srcElement;
        var ta = $(target);
        var idx = ta.index();
        if(!$(target).hasClass('iconfont')) return;

        ta.parent().data('grade',idx+1);
        return ta.parent().data('grade');
        // alert('选定分数 :' + ta.parent().data('grade') + ' / 在此处 user-grade元素节点 data-grade 中存储分数值')
    },
    init:function(select){
        this.el.grade = $(select)
        this.el.grade.on('mouseover',this.getIdx.bind(this))
            .on('mouseout',this.followData.bind(this))
            .on('click',this.storeData.bind(this))
    }
}

// evaluate.init('.user-grade');

export default evaluate