import re

with open('/root/.openclaw/workspace/looks-test/index.html', 'r', encoding='utf-8') as f:
    content = f.read()

# Find and remove the broken script
# Keep everything before and after the script tag
m = re.search(r'(<script>).*?(</script>)', content, re.DOTALL)
if m:
    print('Found script at', m.start(), 'to', m.end())
    # Check if the script is broken (single line createElement issue)
    script_content = content[m.start()+8:m.end()-9]
    if "createElement('    link" in script_content or "createElement('" in script_content:
        print('Script is broken, replacing entirely')
        # Keep the HTML structure, just rebuild script
        html_before = content[:m.start()]
        html_after = content[m.end():]
        content = html_before + '[SCRIPT]' + html_after
    else:
        print('Script looks OK, just adding placeholder')
        content = content[:m.start()] + '[SCRIPT_PLACEHOLDER]' + content[m.end():]
else:
    print('No script found')
    content = content + '[SCRIPT_PLACEHOLDER]'

# Now replace placeholder with correct script
new_script = """
var questions = [
  { q: "\u5728\u964陌生多的\u73b0\u573a\uff0c\u4f60\u7684\u72b6\u6001\u662f\uff1f", opts: [
    { text: "\u7a33\u5f97\u5f88\uff0c\u4e3b\u52a8social", scoreA: 3, scoreB: 0 },
    { text: "\u8fd8\u884c\uff0c\u7b49\u522b\u4eba\u6765\u642d\u8bdd", scoreA: 2, scoreB: 0 },
    { text: "\u5c3d\u91cf\u964d\u4f4e\u5b58\u5728\u611f", scoreA: 1, scoreB: 0 },
    { text: "\u60f3\u8eb2\uff0c\u60f3\u9003\uff0c\u60f3\u6d88\u5931", scoreA: 1, scoreB: 0 }]},
  { q: "\u88ab\u4eba\u5077\u62cd\u65f6\uff0c\u4f60\u7684\u7b2c\u4e00\u53cd\u5e94\u662f\uff1f", opts: [
    { text: "\u7b11\u4e00\u4e2a\uff0c\u8bf4\u4e0d\u5b9a\u80fd\u5f53\u6211\u7684\u7d20\u6750", scoreA: 3, scoreB: 0 },
    { text: "\u65e0\u6240\u8c谓\uff0c\u62cd\u5c31\u62cd\u5473", scoreA: 2, scoreB: 0 },
    { text: "\u5077\u62cd\uff1f\uff1f\uff1f\u7ed9\u6211\u770b\u770b\u62cd\u6210\u4ec0\u4e48\u6837\u4e86\uff01", scoreA: 1, scoreB: 0 },
    { text: "\uff08\u5185\u5fc3\u4e00\u7d27\uff09\u5047\u88c1\u6ca1\u53d1\u73b0", scoreA: 1, scoreB: 0 }]},
  { q: "\u4f60\u613f\u610f\u5728\u670b\u53cb\u5708\u53d1\u81ea\u5df1\u7684\u7d20\u989c\u7167\u5417\uff1f", opts: [
    { text: "\u5f53\u7136\uff0c\u539f\u56fe\u76f4\u51fa\u662f\u6001\u5ea6", scoreA: 3, scoreB: 0 },
    { text: "\u770b\u60c5\u51b5\uff0c\u4e0d\u592a\u8fc7\u5206\u5c31\u884c", scoreA: 2, scoreB: 0 },
    { text: "\u5fc5\u987b\u7f8e\u989c\u6ee4\u955c\u5168\u5f00\u624d\u53d1", scoreA: 1, scoreB: 0 },
    { text: "\u57fa\u672c\u4e0d\u53d1\uff0c\u53d1\u4e5f\u53ea\u53d1\u98ce\u666f", scoreA: 1, scoreB: 0 }]},
  { q: "\u8def\u4e0a\u9047\u5230\u719f\u4eba\u5728\u62cd\u7167\uff0c\u4f60\u7684\u53cd\u5e94\u662f\uff1f", opts: [
    { text: "\u81ea\u7136\u8d70\u8fc7\u53bb\u62a2\u955c", scoreA: 3, scoreB: 0 },
    { text: "\u7b49\u62cd\u5b8c\u518d\u82e6\u82e6\u8def\u8fc7", scoreA: 2, scoreB: 0 },
    { text: "\u7ed5\u8def\u8d70\uff0c\u5047\u88c1\u6ca1\u770b\u89c1", scoreA: 1, scoreB: 0 },
    { text: "\u5185\u5fc3\u7591\u72b6\u9a87\u522b\u88ab\u53d1\u73b0", scoreA: 1, scoreB: 0 }]},
  { q: "\u300c\u4f60\u8fd9\u5f20\u7167\u7247\u597d\u770b\uff01\u300d\u2014\u2014\u4f60\u7684\u53cd\u5e94\u662f\uff1f", opts: [
    { text: "\u8c22\u8c22\uff01\u8fd9\u662f\u6211\u672c\u4eba\u8bf7", scoreA: 3, scoreB: 0 },
    { text: "\u8c22\u8c22\uff08\u5185\u5fc3\u89c9\u5f97\u786e\u5b9e\u8fd8\u884c\uff09", scoreA: 2, scoreB: 0 },
    { text: "\u54ea\u91cc\u54ea\u91cc\uff0c\u4f60\u62cd\u7684\u89d2\u5ea6\u597d", scoreA: 2, scoreB: 0 },
    { text: "\uff08\u72狐狸\uff09\u4f60\u786e\u5b9a\uff1f\uff1f", scoreA: 1, scoreB: 0 }]},
  { q: "\u65e9\u4e0a\u7167\u955c\u5b50\uff0c\u4f60\u4e00\u822c\u4f1a\uff1f", opts: [
    { text: "\u5fcd\u4f4f\u4e0d\u4f4f\u591a\u770b\u4e24\u773c\uff08\u771f\u4e0d\u9519\uff09", scoreA: 0, scoreB: 3 },
    { text: "\u8fd8\u884c\uff0c\u6536\u62fe\u4e00\u4e0b\u51fa\u95e8", scoreA: 0, scoreB: 2 },
    { text: "\u5feb\u901f\u626b\u4e00\u773c\uff0c\u4e0d\u6562\u7ec6\u770b", scoreA: 0, scoreB: 1 },
    { text: "\u2026\u2026\u8fd9\u662f\u6211\uff1f\u4eca\u5929\u914d\u989d\u7528\u5b8c\u4e86", scoreA: 0, scoreB: 1 }]},
  { q: "\u7528\u4e09\u4e2a\u8bcd\u5f62\u5bb9\u81ea\u5df1\u7684\u957f\u76f8\uff0c\u4f60\u4f1a\u8bf4\uff1f", opts: [
    { text: "\u81c2\u5b55\u3001\u7279\u522b\u3001\u591f\u7528\u4e86", scoreA: 0, scoreB: 3 },
    { text: "\u8010\u770b\u3001\u8fd8\u884c\u3001\u6709\u8bb0\u5fc6\u70b9", scoreA: 0, scoreB: 2 },
    { text: "\u666e\u901a\u3001\u5e73\u51e1\u3001\u8def\u4eba\u7532", scoreA: 0, scoreB: 1 },
    { text: "\u4e0d\u8981\u95ee\u6211\uff0c\u8bf4\u4e86\u6015\u6323\u6253", scoreA: 0, scoreB: 1 }]},
  { q: "\u770b\u5230\u81ea\u5df1\u88ab\u670b\u53cb\u62cd\u5230\u7684\u7167\u7247\uff0c\u4f60\u7684\u53cd\u5e94\u662f\uff1f", opts: [
    { text: "\u8fd9\u89d2\u5ea6\u7edd\u4e86\uff0c\u6bd4\u81ea\u62cd\u8fd8\u597d\u770b", scoreA: 0, scoreB: 3 },
    { text: "\u80fd\u63a5\u53d7\uff0c\u8ddf\u5e73\u65f6\u5dee\u4e0d\u591a", scoreA: 0, scoreB: 2 },
    { text: "\u6211\u5e73\u65f6\u4e0d\u957f\u8fd9\u6837\u5427\uff1f\uff1f", scoreA: 0, scoreB: 1 },
    { text: "\u6211\u4e0d\u542c\u6211\u4e0d\u542c\u6211\u4e0d\u542c", scoreA: 0, scoreB: 1 }]},
  { q: "\u7167\u955c\u5b50\u65f6\uff0c\u4f60\u5bf9\u81ea\u5df1\u957f\u76f8\u7684\u671f\u5f85\u662f\uff1f", opts: [
    { text: "\u5dee\u4e0d\u591a\u5c31\u884c\uff0c\u53cd\u6b63\u6211\u4e5f\u4e0d\u5dee", scoreA: 0, scoreB: 3 },
    { text: "\u7a0d\u5fae\u6536\u62fe\u4e00\u4e0b\u5c31\u80fd\u51fa\u95e8", scoreA: 0, scoreB: 2 },
    { text: "\u5982\u679c\u80fd\u518d\u5e05/\u7f8e\u4e00\u70b9\u5c31\u597d\u4e86", scoreA: 0, scoreB: 1 },
    { text: "\u4e0d\u6562\u6709\u671f\u5f85\uff0c\u6d3b\u7740\u5c31\u597d", scoreA: 0, scoreB: 1 }]},
  { q: "\u9762\u5bf9\u300c\u4f60\u957f\u5f97\u771f\u597d\u770b\u300d\u8fd9\u79cd\u593a\u5956\uff0c\u4f60\u7684\u5185\u5fc3\u662f\uff1f", opts: [
    { text: "\u5468\uff0c\u6211\u77e5\u9053\uff08\u5fae\u5fae\u70b9\u5934\uff09", scoreA: 0, scoreB: 3 },
    { text: "\u8c22\u8c22\uff0c\u5ba2\u6c14\u5ba2\u6c14", scoreA: 0, scoreB: 2 },
    { text: "\uff1f\uff1f\uff1f\u4f60\u662f\u4e0d\u662f\u5728\u5185\u6db5\u6211", scoreA: 0, scoreB: 1 },
    { text: "\uff08\u8868\u9762\u6de1\u5b9a\uff0c\u5185\u5fc3\u5df2\u7ecf\u5728\u53d1\u5956\u72b6\uff09", scoreA: 0, scoreB: 2 }]}
];

var results = {
  'low-low':   { type: "\u72ec\u5904\u4fee\u884c\u8005", title: "\u5185\u5411\u578b\u81ea\u7701\u8005\uff0c\u4f60\u5728\u81ea\u5df1\u7684\u4e16\u754c\u91cc\u95ea\u95ea\u53d1\u5149", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Le_Penseur_by_Rodin_%28Kunsthalle_Bielefeld%29_2014-04-10.JPG/330px-Le_Penseur_by_Rodin_%28Kunsthalle_Bielefeld%29_2014-04-10.JPG" },
  'low-mid':   { type: "\u9759\u6c34\u6df1\u6f6d\u578b", title: "\u6e29\u548c\u63a5\u7eb3\u578b\uff0c\u628a\u5e73\u51e1\u6d3b\u6210\u4e86\u6df1\u6c89\u7684\u529b\u91cf", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/1665_Girl_with_a_Pearl_Earring.jpg/330px-1665_Girl_with_a_Pearl_Earring.jpg" },
  'low-high':  { type: "\u6cbb\u6108\u6e29\u6696\u578b", title: "\u6162\u6027\u5b50\u81ea\u4fe1\uff0c\u4e0d\u5f20\u626c\u5374\u8ba9\u4eba\u5fcd\u4e0d\u4f4f\u9760\u8fd1", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Sandro_Botticelli_-_La_nascita_di_Venere_-_Google_Art_Project_-_edited.jpg/400px-Sandro_Botticelli_-_La_nascita_di_Venere_-_Google_Art_Project_-_edited.jpg" },
  'mid-low':   { type: "\u8fdb\u51fb\u5c0f\u900f\u660e", title: "\u793e\u4ea4\u20ac7\u8d28\u5dde\u4e2d\u7684\u5f02\u6597\u8005\uff0c\u6b63\u5728\u8d1f\u5411\u66f4\u8212\u5c55\u7684\u81ea\u5df1", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg/330px-Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg" },
  'mid-mid':   { type: "\u9760\u8c31\u672c\u8c31\u578b", title: "\u771f\u5b9e\u7cfb\u73a9\u5bb6\uff0c\u597d\u770b\u4e0d\u597d\u770b\u6211\u90fd\u5728\u8ba2\u771f\u505a\u81ea\u5df1", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Jean-Baptiste-Camille_Corot_053.jpg/400px-Jean-Baptiste-Camille_Corot_053.jpg" },
  'mid-high':  { type: "\u6c1b\u56f4\u611f\u5927\u5e08", title: "\u6162\u70ed\u53d1\u5149\u7684\u4f60\uff0c\u81ea\u5e26\u8ba9\u4eba\u4e0a\u763e\u7684\u6c14\u573a", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Lady_with_an_Ermine_-_Leonardo_da_Vinci_%28adjusted_levels%29.jpg/330px-Lady_with_an_Ermine_-_Leonardo_da_Vinci_%28adjusted_levels%29.jpg" },
  'high-low':  { type: "\u53cd\u7126\u8651\u5929\u82b1\u677f", title: "\u4f60\u5df2\u7ecf\u8df3\u51fa\u4e86\u989c\u503c\u7684\u8bc4\u5224\u4f53\u7cfb\uff0c\u5b8c\u5168\u505a\u81ea\u5df1", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/La_Libert%C3%A9_guidant_le_peuple_-_Eug%C3%A8ne_Delacroix_-_Mus%C3%A9e_du_Louvre_Peintures_RF_129_-_apr%C3%A8s_restauration_2024.jpg/400px-La_Libert%C3%A9_guidant_le_peuple_-_Eug%C3%A8ne_Delacroix_-_Mus%C3%A9e_du_Louvre_Peintures_RF_129_-_apr%C3%A8s_restauration_2024.jpg" },
  'high-mid':  { type: "\u8010\u770b\u96c5\u5178\u578b", title: "\u8d8a\u770b\u8d8a\u4e0a\u5934\u7684\u6b3e\uff0c\u4f60\u662f\u65f6\u95f4\u68c0\u9a8c\u8fc7\u7684\u7ecf\u5178", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Mattei_Athena_Louvre_Ma530_n2.jpg/330px-Mattei_Athena_Louvre_Ma530_n2.jpg" },
  'high-high': { type: "\u5929\u8d4b\u5f25\u5c14\u987f\u578b", title: "\u8001\u5929\u7237\u624b\u6280\u9020\u7684\u5b59\u54c1\uff0c\u8bf7\u73cd\u60dc\u9650\u91cf\u7248\u7684\u8138", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Apollo_del_Belvedere.jpg/330px-Apollo_del_Belvedere.jpg" }
};

var compliments = {
  'low-low':   "\u4f60\u4e0d\u559c\u6b22\u4e3b\u52a8\u51fa\u51fb\uff0c\u4f46\u4f60\u7684\u5185\u5fc3\u6709\u4e00\u4e2a\u5b8c\u6574\u7684\u5b87\u5b99\u3002\u522b\u4eba\u770b\u4e0d\u5230\u4f60\u7684\u5149\u8292\uff0c\u4f46\u4f60\u81ea\u5df1\u77e5\u9053\u3002\u4f60\u4e0d\u9700\u8981\u9760\u5916\u8868\u6765\u8bc1\u660e\u4ec0\u4e48\uff0c\u56e0\u4e3a\u4f60\u65e9\u5c31\u8df3\u51fa\u4e86\u8fd9\u4e2a\u8bc4\u5224\u4f53\u7cfb\u3002",
  'low-mid':   "\u4f60\u7684\u597d\u770b\u662f\u9759\u6c34\u6df1\u6f6d\u90a3\u79cd\u2014\u2014\u8868\u9762\u6ce2\u7f9e\u4e0d\u60ca\uff0c\u5e95\u4e0b\u662f\u522b\u4eba\u770b\u4e0d\u89c1\u7684\u6df1\u5ea6\u3002\u4f60\u4e0d\u7a9f\u8a89\u3001\u4e0d\u89e3\u91ca\uff0c\u4f46\u61c2\u7684\u4eba\u81ea\u7136\u4f1a\u88ab\u4f60\u5438\u5f15\u3002\u8fd9\u662f\u53ea\u6709\u65f6\u95f4\u624d\u80fd\u6c89\u6dc0\u51fa\u6765\u7684\u9ad8\u7ea7\u611f\u3002",
  'low-high':  "\u4f60\u662f\u90a3\u79cd\u8ba9\u4eba\u5fcd\u4e0d\u4f4f\u60f3\u9760\u8fd1\u7684\u7c7b\u578b\u2014\u2014\u6ca1\u6709\u653b\u51fb\u6027\uff0c\u4f46\u6709\u6e29\u5ea6\u3002\u4f60\u7684\u5b58\u5728\u672c\u8eab\u5c31\u50cf\u4e00\u676f\u6e29\u70ed\u7684\u8336\uff0c\u559d\u4e0b\u53bb\uff0c\u6574\u4e2a\u4e16\u754c\u90fd\u67d4\u548c\u4e86\u70b9\u3002\u4f60\u4e0d\u9700\u8981\u6539\u53d8\u4ec0\u4e48\uff0c\u4fdd\u6301\u5c31\u597d\u3002",
  'mid-low':   "\u4f60\u6b63\u5728\u8def\u4e0a\u3002\u4ece\u4e0d\u592a\u81ea\u4fe1\u5230\u5b8c\u5168\u63a5\u7eb3\u81ea\u5df1\uff0c\u8fd9\u6761\u8def\u4f60\u8d70\u5f97\u8d4f\u5b9e\u3002\u6bcf\u4e00\u6b21\u300c\u8fd8\u6562\u81ea\u53d1\u81ea\u62cd\u300d\u7684\u5c0f\u8fdb\u6b65\uff0c\u90fd\u5728\u628a\u81ea\u5df1\u63a8\u5411\u66f4\u8212\u5c55\u7684\u7248\u672c\u3002",
  'mid-mid':   "\u4f60\u662f\u90a3\u79cd\u771f\u5b9e\u5230\u53ef\u7231\u7684\u4eba\u2014\u2014\u4e0d\u88c5\u3001\u4e0d\u6f14\u3001\u4e0dP\u56fe\uff0c\u4f46\u4e5f\u4e0d\u7a9f\u3002\u4f60\u63a5\u53d7\u955c\u5b50\u91cc\u90a3\u4e2a\u4eba\uff0c\u4e0d\u62b1\u6740\u4e5f\u4e0d\u8d2f\u4f4e\u3002\u8fd9\u4efd\u5e73\u5e38\u5fc3\uff0c\u662f\u6700\u9ad8\u7ea7\u7684\u989c\u503c\u3002",
  'mid-high':  "\u4f60\u4e0d\u662f\u90a3\u79cd\u7b2c\u4e00\u773c\u5c31\u70b8\u88c2\u7684\u7c7b\u578b\uff0c\u4f46\u4f60\u662f\u90a3\u79cd\u2014\u2014\u770b\u5b8c\u4e00\u773c\u60f3\u770b\u7b2c\u4e8c\u773c\u3001\u770b\u5230\u5929\u4eae\u90fd\u4e0d\u80db\u7684\u7c7b\u578b\u3002\u4f60\u7684\u7f8e\u662f\u9648\u5e74\u8001\u9152\uff0c\u662f\u8d8a\u54c1\u8d8a\u6709\u5473\u7684\u7981\u4e66\u3002",
  'high-low':  "\u4f60\u5df2\u7ecf\u5b8c\u5168\u8df3\u51fa\u4e86\u989c\u503c\u7684\u6e38\u620f\u89c4\u5219\u3002\u4f60\u4e0d\u5728\u522b\u4eba\u7684\u8bc4\u5206\u4f53\u7cfb\u91cc\u8dd1\uff0c\u4f60\u6839\u672c\u8ddf\u5979\u4eec\u540c\u573a\u7ade\u6280\u3002\u8fd9\u53eb\u4ec0\u4e48\uff1f\u8fd9\u53eb\u2014\u2014\u6d3b\u900f\u4e86\u3002",
  'high-mid':  "\u4f60\u7684\u597d\u770b\u662f\u5efa\u7b51\u5947\u8ff9\u90a3\u79cd\u2014\u2014\u7ecf\u5f97\u8d77\u65f6\u95f4\u3001\u89d2\u5ea6\u3001\u6311\u5254\u7684\u6240\u6709\u8003\u9a8c\u3002\u96c5\u70b9\u5a1c\u4e0d\u662f\u56e0\u4e3a\u5f20\u626c\u624d\u6210\u4e3a\u5973\u795e\uff0c\u4f60\u4e5f\u662f\u3002\u7ecf\u5178\u4ece\u6765\u4e0d\u9700\u8981\u89e3\u91ca\u3002",
  'high-high': "\u4f60\u7684\u8138\u662f\u8001\u5929\u7237\u60f3\u6253\u9020\u7cbe\u54c1\u65f6\u4e0d\u5c0f\u5fc3\u505a\u51fa\u6765\u7684\u5b69\u54c1\u3002\u4f60\u4e0d\u662f\u5728\u7167\u955c\u5b50\uff0c\u662f\u955c\u5b50\u5728\u5e86\u5e78\u80fd\u6846\u4f4f\u4f60\u3002\u8bf7\u73cd\u60dc\uff0c\u8fd9\u662f\u9650\u91cf\u7248\u3002"
};

var tagsMap = {
  'low-low':   ["\u72ec\u5904\u578b", "\u5185\u7701\u8005", "\u81ea\u6211\u63a5\u7eb3", "\u4f5b\u7cfb"],
  'low-mid':   ["\u9759\u6c34\u6df1", "\u6df1\u6c89\u578b", "\u6709\u6545\u4e8b", "\u4e0d\u5f20\u626扬"],
  'low-high':  ["\u6cbb\u6108\u7cfb", "\u6e29\u6696\u578b", "\u8ba9\u4eba\u5b89\u5fc3", "\u6709\u6e29\u5ea6"],
  'mid-low':   ["\u6f5c\u529b\u80a1", "\u6210\u957f\u578b", "\u6f5c\u6f5c\u53d8\u597d", "\u52c7\u6562"],
  'mid-mid':   ["\u771f\u5b9e\u7cfb", "\u4e0d\u88c5", "\u7a33", "\u751f\u6d3b\u5bb6"],
  'mid-high':  ["\u6c1b\u56f4\u611f", "\u6162\u70ed", "\u4e0a\u5934", "\u56de\u5473\u578b"],
  'high-low':  ["\u53cd\u5185\u5377", "\u900f\u901a", "\u81ea\u6211", "\u89c9\u9192"],
  'high-mid':  ["\u7ecf\u5178\u6b3e", "\u8010\u770b", "\u96c5\u5179", "\u7a33\u5b9a\u8f93\u51fa"],
  'high-high': ["\u5929\u8d4b\u578b", "\u8001\u5929\u7237\u5948\u996d", "\u9650\u91cf\u7248", "\u5b69\u54c1"]
};

var currentQ = 0;
var scoreA = 0;
var scoreB = 0;

function startTest() {
  currentQ = 0; scoreA = 0; scoreB = 0;
  showPage('question'); renderQuestion();
}

function getDimLevel(score) {
  if (score <= 8) return 'low';
  if (score <= 11) return 'mid';
  return 'high';
}

function renderQuestion() {
  var q = questions[currentQ];
  document.getElementById('qNum').textContent = '\u7b2c ' + (currentQ + 1) + ' / ' + questions.length + ' \u9898';
  document.getElementById('qText').textContent = q.q;
  document.getElementById('progress').style.width = (currentQ / questions.length * 100) + '%';
  var optsEl = document.getElementById('options');
  optsEl.innerHTML = '';
  q.opts.forEach(function(opt) {
    var btn = document.createElement('button');
    btn.className = 'option-btn';
    btn.textContent = opt.text;
    btn.onclick = function() { selectOption(opt.scoreA, opt.scoreB); };
    optsEl.appendChild(btn);
  });
}

function selectOption(sA, sB) {
  scoreA += sA; scoreB += sB; currentQ++;
  if (currentQ < questions.length) { renderQuestion(); }
  else { showResult(); }
}

function showResult() {
  document.getElementById('progress').style.width = '100%';
  setTimeout(function() { showPage('result'); renderResult(); createSparkles(); }, 400);
}

function renderResult() {
  var key = getDimLevel(scoreA) + '-' + getDimLevel(scoreB);
  var r = results[key];
  document.getElementById('rType').textContent = r.type;
  document.getElementById('rTitle').textContent = r.title;
  document.getElementById('rPortrait').src = r.img;
  document.getElementById('rCompliment').textContent = compliments[key];
  var tagsEl = document.getElementById('rTags');
  tagsEl.innerHTML = '';
  tagsMap[key].forEach(function(tag) {
    var span = document.createElement('span');
    span.className = 'result-tag';
    span.textContent = tag;
    tagsEl.appendChild(span);
  });
}

function createSparkles() {
  var emojis = ['\u2728', '\ud83e\uddab', '\u2b50', '\ud83c\udf1f', '\ud83e\udd26', '\ud83e\udd8b', '\ud83c\udf38', '\ud83c\udf40'];
  for (var i = 0; i < 20; i++) {
    (function(j) {
      setTimeout(function() {
        var el = document.createElement('div');
        el.className = 'sparkle';
        el.innerHTML = emojis[Math.floor(Math.random() * emojis.length)];
        el.style.left = Math.random() * 100 + 'vw';
        el.style.top = Math.random() * 100 + 'vh';
        el.style.fontSize = (Math.random() * 20 + 12) + 'px';
        document.body.appendChild(el);
        setTimeout(function() { el.remove(); }, 1500);
      }, j * 80);
    })(i);
  }
}

function retry() { showPage('start'); }

function showPage(name) {
  document.querySelectorAll('.page').forEach(function(p) { p.classList.remove('active'); });
  document.getElementById('page-' + name).classList.add('active');
}

function wrapText(ctx, text, maxWidth, fontSize) {
  ctx.font = fontSize + 'px PingFang SC, Microsoft YaHei';
  var words = text.split('');
  var line = '';
  var lines = [];
  for (var i = 0; i < words.length; i++) {
    var testLine = line + words[i];
    if (ctx.measureText(testLine).width > maxWidth && i > 0) {
      lines.push(line); line = words[i];
    } else { line = testLine; }
  }
  if (line) lines