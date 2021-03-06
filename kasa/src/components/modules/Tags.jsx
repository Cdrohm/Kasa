//Tags (tags) in house page
function Tags({
    tags
}) {
    return (
        <div className="Tags">
			{tags.map((tag, i) => (
				<span className="tag_elt" key={`${tag}-${i}`}>
                    {tag}
                </span>
			))}
		</div>
    );
}

export default Tags;