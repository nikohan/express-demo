#!/bin/bash

echo "git pull"
git pull
echo "git push"
git push
echo ""
echo -e "\033[31m \033[05m 如果更新代码分支有冲突,请先解决冲突! \033[0m"
echo ""

dev_tag(){
	RSLT='OK'
	release_file_name=`pwd`'/release/'$1'.txt'
	#echo "检查移交文件是否存在......"
	if [ -e "$release_file_name" ] ; then
		#echo `ls $release_file_name`
		echo -n ""
	else
		echo "移交文件${release_file_name} 不存在"
		#RSLT='NOT_OK'
	fi

	if [ "$RSLT" = "OK" ]
		then
		RSLT=0
	else
		RSLT=1
	fi

	return $RSLT
}

reg_tag() {
	#检查约束，默认不检查
	return 0
}

rel_tag() {
	#检查约束，默认不检查
	return 0
}

parse_git_branch() {
  	 echo `git branch 2> /dev/null | sed -e '/^[^*]/d' -e 's/^* //'` 
}

#dev和reg tag号
parse_target_tag_version() {
	target="$1_$2"
	if [ $1 = "rel" ]
	then
		
		target="$1_$2"
	else
		#echo 'no rel'
		#echo $target
		version=`git tag | grep $1_$2| wc -l`
		let version="$version+1"
		if [ $version -lt 10 ] 
		then
		   target=${target}"_0"${version}
		else
		   target=${target}"_"${version}
		fi

	fi
	echo $target
}


test_git_master() {
	echo "master"
}

do_tag(){
    read -p "确定将 $1 推送到服务器[YES]: " tag_confirm
    tag_confirm=${tag_confirm:-YES}

    if [ "$tag_confirm" = "YES" ]
    then
	echo "git tag $1"
	git tag $1
    echo "git push origin $1"
    git push origin $1
    else
    echo "取消成功!"
    exit 2
    fi
}

undo_tag(){
	echo "git tag -d $1"
	git tag -d $1
}

set_release_date() {
	#设置时间
	while [ -z "$pdate" ]
	do
		read -p "请输入发布日期[20140116]: " pdate
		#echo $pdate
        #date=`echo $pdate | sed -n "/^[0-9]\+$/p"`
		#echo $date
		#if [  "$date" = "" ]
		#   then
		#    pdate=""
		#fi

	done
	echo "你输入的发布日期为: $pdate"
}




TAG_TYPE_TARGET=$1

run_rs=0


master=`parse_git_branch`

echo "当前分支为:"$master

if [ "$TAG_TYPE_TARGET" = "dev" ]; then

	if [ "$master" = "master" ]; then
		echo "请在开发分支上打dev"
		run_rs=1
	else
		#set_release_date
		pdate=`echo $master | cut  -f 2 -d '_'`


		#echo "./release.sh"
		#./release.sh
		#执行移交检查
		#lufax check $pdate

		#if [ "$?" = "0" ]; then
			echo "执行移交检查成功"
			dev_tag $pdate
			run_rs=$?
		#else
		#	echo "执行移交检查失败，请按照错误消息进行检查"
		#	run_rs=1
		#fi

	fi
fi

if [ "$TAG_TYPE_TARGET" = "reg" ]; then

	echo ""
    echo -e "\033[31m \033[05m 请确保将master分支merge到开发分支,然后将开发分支merge到master! \033[0m"
    echo ""

	if [ "$master" = "master" ]; then

		set_release_date
		echo ""
		echo "./release.sh"
		echo ""
		#./release.sh
		#执行移交检查
		#echo "lufax check $pdate"
		#lufax check $pdate

		#if [ "$?" = "0" ]; then
			echo "执行移交检查成功"
			reg_tag
			run_rs=$?
		#else
		#	echo "执行移交检查失败，请按照错误消息进行检查"
		#	run_rs=1
		#fi

	else
		echo "请在master分支上打reg"
		run_rs=1
	fi
	
fi

if [ "$TAG_TYPE_TARGET" = "rel" ]; then

	#if [ "$master" = "master" ]; then

		echo ""
		echo -e "\033[31m \033[05m 完成后请通知其他其他人合并master分支! \033[0m"
		echo ""

		set_release_date
		rel_tag
		run_rs=$?
	#else
	#	echo "请在master分支上打rel"
	#	run_rs=1
	#fi
fi

#echo $run_rs
if [ "$run_rs" != "0" ]; then
	echo "任务执行失败"
	exit 1
else
	tag_version=`parse_target_tag_version $TAG_TYPE_TARGET  $pdate`
	echo "目标TAG为:"$tag_version
	if [ "$tag_version"x != ""x ]; then

		do_tag $tag_version

		if [ "$?" = "0" ]; then
            echo "任务执行成功"
        else
            undo_tag $tag_version
            echo "任务执行失败"
            exit 1
        fi

	else
		echo "任务执行失败"
		exit 1
	fi
	
fi

exit 0
