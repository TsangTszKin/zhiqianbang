const base = {
	aaa: 'bbb'
}

const development = merge(base, {

	//zzj
	sftpPathPrefix: 'http://121.8.157.139:10181',

	ssoServerHost: 'http://121.8.157.140:18213', //测试机
	// ssoServerHost: 'http://0.0.0.0:8090', //我本地

	// gwApiPrefix: 'http://192.168.29.235:8211', //测试机
	gwApiPrefix: 'http://121.8.157.140:18211',//测试机
	// gwApiPrefix: 'http://192.168.24.240:28080',//丽梅本地
	// gwApiPrefix: 'http://192.168.24.244:8079', //梓杰本地
	// gwApiPrefix:'http://192.168.24.245:8090', //华炎本地
	// gwApiPrefix:'http://192.168.49.233:8080', //炳豪本地

})

const production = merge(base, {
	ssoServerHost: 'http://sso.zhiqianbang.com',
	sftpPathPrefix: 'http://sftp.zhiqianbang.com',
	gwApiPrefix: 'http://api.zhiqianbang.com'
})

const test = merge(base, {
	ssoServerHost: 'http://121.8.157.140:18213',
	sftpPathPrefix: 'http://121.8.157.139:10181',
	gwApiPrefix: 'http://121.8.157.140:18211'
})

const qa = merge(base, {
	ssoServerHost: 'http://10.48.26.102:8213',
	sftpPathPrefix: 'http://121.8.157.139:10181',
	gwApiPrefix: 'http://10.48.26.102:8211'
})

function merge(base, ext) {
	var temp = {};
	for (var key in base) {
		temp[key] = base[key];
	}
	for (var key in ext) {
		temp[key] = ext[key];
	}
	return temp;
}

// webpack build的时候process.env.NODE_ENV会被编译替换成实际值，但process.env仍不可访问
export default eval(process.env.NODE_ENV)